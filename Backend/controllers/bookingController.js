import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const { userId, roomId, checkInDate, checkOutDate, totalPrice } = req.body;

  try {
    const booking = new Booking({ userId, roomId, checkInDate, checkOutDate, totalPrice });
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId roomId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('userId roomId');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
