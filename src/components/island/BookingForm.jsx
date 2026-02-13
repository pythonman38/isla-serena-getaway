import React, { useState } from "react";
import { Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BookingForm() {
  const [duration, setDuration] = useState("5");
  const [guests, setGuests] = useState("2");
  const [checkIn, setCheckIn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request submitted for ${duration} days, ${guests} guests, starting ${checkIn}`);
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-900">Book Your Stay</h3>
        <p className="mt-2 text-sm text-slate-500">Plan your perfect 5 to 7 day getaway</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="check-in" className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Calendar className="h-4 w-4 text-sky-600" />
            Check-in Date
          </Label>
          <Input
            id="check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="duration" className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Clock className="h-4 w-4 text-sky-600" />
            Duration
          </Label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger id="duration">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Days / 4 Nights</SelectItem>
              <SelectItem value="6">6 Days / 5 Nights</SelectItem>
              <SelectItem value="7">7 Days / 6 Nights</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="guests" className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Users className="h-4 w-4 text-sky-600" />
            Number of Guests
          </Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger id="guests">
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full bg-sky-600 py-6 text-base font-semibold hover:bg-sky-700"
        >
          Check Availability
        </Button>
      </form>

      <p className="mt-4 text-center text-xs text-slate-400">
        Free cancellation up to 48 hours before check-in
      </p>
    </div>
  );
}