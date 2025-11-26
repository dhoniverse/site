export interface EventItem {
  id: string;
  title: string;
  category: 'Culture' | 'Sports' | 'Art' | 'Surprises';
  image: string;
  description: string;
  detailedDescription: string;
}

export interface ScheduleItem {
  time: string;
  event: string;
  description?: string;
}

export interface DaySchedule {
  date: string;
  day: string;
  events: ScheduleItem[];

}
export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  address: string;
  email: string;  // ADD THIS LINE
}