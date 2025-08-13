"use client";

import React, { useState, useEffect } from "react";
import {
  Wallet,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import {
  authenticatedApi,
  AuthenticatedApiError,
} from "@/lib/api/authenticated";

// Types for API response
type DashboardData = {
  basic_details: {
    email: string;
    school_id: string;
  };
  teachers: {
    totalTeachers: number;
    activeClasses: number;
    totalSubjects: number;
  };
  students: {
    totalStudents: number;
    activeStudents: number;
    suspendedStudents: number;
  };
  finance: {
    totalRevenue: number;
    outstandingFees: number;
    totalExpenses: number;
    netBalance: number;
  };
  ongoingClasses: unknown[];
  notifications: unknown[];
};

// Skeleton component
const SkeletonCard = () => (
  <Card className="shadow-sm bg-white">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 bg-gray-200 rounded animate-pulse w-32 shimmer"></div>
        <div className="h-5 w-5 bg-gray-200 rounded animate-pulse shimmer"></div>
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24 shimmer"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-16 shimmer"></div>
          </div>
        ))}
      </div>
      <div className="mt-4 h-9 bg-gray-200 rounded animate-pulse shimmer"></div>
    </CardContent>
  </Card>
);

const classFilters = [
  { label: "All", value: "all" },
  { label: "JSS1", value: "JSS1" },
  { label: "JSS2", value: "JSS2" },
  { label: "JSS3", value: "JSS3" },
  { label: "SS1", value: "SS1" },
  { label: "SS2", value: "SS2" },
  { label: "SS3", value: "SS3" },
];

const ongoingClassesDemo = [
  {
    class: "JSS1A",
    subject: "Mathematics",
    teacher: "Mr. Ade",
    from: "08:00",
    to: "09:00",
  },
  {
    class: "JSS1B",
    subject: "English",
    teacher: "Mrs. Bello",
    from: "08:00",
    to: "09:00",
  },
  {
    class: "JSS2A",
    subject: "Basic Science",
    teacher: "Mr. Chinedu",
    from: "09:00",
    to: "10:00",
  },
  {
    class: "JSS2B",
    subject: "Social Studies",
    teacher: "Ms. Grace",
    from: "09:00",
    to: "10:00",
  },
  {
    class: "SS1A",
    subject: "Biology",
    teacher: "Dr. Musa",
    from: "10:00",
    to: "11:00",
  },
  {
    class: "SS2C",
    subject: "Chemistry",
    teacher: "Mrs. Okafor",
    from: "11:00",
    to: "12:00",
  },
  {
    class: "SS3B",
    subject: "Physics",
    teacher: "Mr. Johnson",
    from: "12:00",
    to: "01:00",
  },
  {
    class: "JSS3A",
    subject: "Computer Science",
    teacher: "Mr. David",
    from: "13:00",
    to: "14:00",
  },
  {
    class: "SS1B",
    subject: "Economics",
    teacher: "Mrs. Sarah",
    from: "14:00",
    to: "15:00",
  },
];

const AdminDashboard = () => {
  const router = useRouter();

  // State for API data
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authenticatedApi.get(
        "/director/dashboard/fetch-dashboard-data"
      );

      if (response.success) {
        setDashboardData(response.data as DashboardData);
      } else {
        throw new AuthenticatedApiError(
          response.message || "Failed to fetch dashboard data",
          response.statusCode || 400,
          response
        );
      }
    } catch (error: unknown) {
      let errorMessage =
        "An unexpected error occurred while loading dashboard data.";

      if (error instanceof AuthenticatedApiError) {
        if (error.statusCode === 401) {
          errorMessage = "Your session has expired. Please login again.";
        } else if (error.statusCode === 403) {
          errorMessage = "You don't have permission to access this data.";
        } else {
          errorMessage = error.message;
        }
      }

      setError(errorMessage);
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Retry mechanism
  const handleRetry = () => {
    setShowErrorModal(false);
    fetchDashboardData();
  };

  const [classFilter, setClassFilter] = useState("all");
  const filteredOngoingClasses =
    classFilter === "all"
      ? ongoingClassesDemo
      : ongoingClassesDemo.filter((c) =>
          c.class.toUpperCase().startsWith(classFilter)
        );

  return (
    <div className="py-6 space-y-6 bg-brand-bg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-brand-heading">
          Dashboard Overview
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString()}
          </span>
          <Clock className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Financial Overview Card */}
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <Card className="shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Financial Overview</h3>
                <Wallet className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Revenue</span>
                  <span className="font-semibold">
                    ₦{" "}
                    {dashboardData?.finance.totalRevenue.toLocaleString() ||
                      "0"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Outstanding Fees</span>
                  <span className="font-semibold text-yellow-600">
                    ₦{" "}
                    {dashboardData?.finance.outstandingFees.toLocaleString() ||
                      "0"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Net Balance</span>
                  <span className="font-semibold text-green-600">
                    ₦{" "}
                    {dashboardData?.finance.netBalance.toLocaleString() || "0"}
                  </span>
                </div>
              </div>
              <Button
                variant="link"
                className="mt-4 w-full justify-between"
                onClick={() => router.push("/admin/finance")}
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Teachers Overview Card */}
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <Card className="shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Teachers Overview</h3>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Teachers</span>
                  <span className="font-semibold">
                    {dashboardData?.teachers.totalTeachers || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Classes</span>
                  <span className="font-semibold">
                    {dashboardData?.teachers.activeClasses || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Subjects</span>
                  <span className="font-semibold">
                    {dashboardData?.teachers.totalSubjects || 0}
                  </span>
                </div>
              </div>
              <Button
                variant="link"
                className="mt-4 w-full justify-between"
                onClick={() => router.push("/admin/teachers")}
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Students Overview Card */}
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <Card className="shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Students Overview</h3>
                <GraduationCap className="h-5 w-5 text-purple-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-semibold">
                    {dashboardData?.students.totalStudents || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Students</span>
                  <span className="font-semibold">
                    {dashboardData?.students.activeStudents || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Suspended Students</span>
                  <span className="font-semibold">
                    {dashboardData?.students.suspendedStudents || 0}
                  </span>
                </div>
              </div>
              <Button
                variant="link"
                className="mt-4 w-full justify-between"
                onClick={() => router.push("/admin/students")}
              >
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Ongoing Classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ongoing Classes List */}
        <Card className="shadow-sm hover:shadow-md transition-shadow bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Ongoing Classes</h3>
              <BookOpen className="h-5 w-5 text-blue-500" />
            </div>

            {/* Class Filter Buttons */}
            <div className="flex gap-2 mb-4">
              {classFilters.map((filter) => (
                <button
                  key={filter.value}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    classFilter === filter.value
                      ? "bg-brand-primary text-white border-brand-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setClassFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div
              className="max-h-64 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#D1D5DB #F3F4F6",
              }}
            >
              <div className="space-y-3">
                {filteredOngoingClasses.length > 0 ? (
                  filteredOngoingClasses.map((classItem, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-brand-primary">
                          {classItem.class}
                        </span>
                        <span className="text-xs text-gray-500">
                          {classItem.from} - {classItem.to}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {classItem.subject} - {classItem.teacher}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No ongoing classes for{" "}
                    {classFilter === "all" ? "all classes" : classFilter}
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="link"
              className="mt-4 w-full justify-between"
              onClick={() => router.push("/admin/schedules")}
            >
              View Full Schedule <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="shadow-sm hover:shadow-md transition-shadow bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
              <Calendar className="h-5 w-5 text-rose-500" />
            </div>
            <div
              className="max-h-64 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#D1D5DB #F3F4F6",
              }}
            >
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">End of Term Exams</span>
                    <span className="text-sm text-gray-500">Dec 15</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Final examinations for all classes
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Parents Meeting</span>
                    <span className="text-sm text-gray-500">Dec 20</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Annual parents-teachers meeting
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Sports Day</span>
                    <span className="text-sm text-gray-500">Dec 22</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Annual sports competition
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="link"
              className="mt-4 w-full justify-between"
              onClick={() => router.push("/calendar")}
            >
              View Calendar <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Error Modal */}
      <Dialog open={showErrorModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Failed to Load Dashboard
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground mb-4">{error}</p>
            <div className="flex gap-3">
              <Button onClick={handleRetry} className="flex-1 gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Button
                onClick={() => setShowErrorModal(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
