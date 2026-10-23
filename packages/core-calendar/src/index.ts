export type CalendarProvider = 'google' | 'microsoft' | 'apple';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  provider?: CalendarProvider;
}

export interface ProviderAdapter {
  id: CalendarProvider;
  displayName: string;
  sync(): Promise<void>;
}

export function calculateEventDurationMinutes(event: CalendarEvent): number {
  const duration = event.end.getTime() - event.start.getTime();
  if (duration <= 0) {
    return 0;
  }
  return Math.round(duration / 60000);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export class MemoryAdapter implements ProviderAdapter {
  public readonly id: CalendarProvider;
  public readonly displayName: string;

  private events: CalendarEvent[] = [];

  constructor(id: CalendarProvider, displayName: string) {
    this.id = id;
    this.displayName = displayName;
  }

  async sync(): Promise<void> {
    await Promise.resolve();
  }

  upsert(event: CalendarEvent) {
    const index = this.events.findIndex((existing) => existing.id === event.id);

    if (index >= 0) {
      this.events[index] = event;
    } else {
      this.events.push(event);
    }
  }

  listEvents(predicate?: (event: CalendarEvent) => boolean) {
    return typeof predicate === 'function' ? this.events.filter(predicate) : [...this.events];
  }
}
