const mapping: Record<string, string> = {
  'attendance-records': 'attendance_record',
  companies: 'company',
  departments: 'department',
  'employee-details': 'employee_details',
  'job-positions': 'job_position',
  'salary-structures': 'salary_structure',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
