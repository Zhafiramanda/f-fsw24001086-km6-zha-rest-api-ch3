const cars = require("../data/cars.json");

// Mendapatkan semua mobil
const getAllCars = (req, res) => {
  res.status(200).json({
    status: "success",
    data: cars
  });
};

// Mendapatkan mobil berdasarkan ID
const getCarById = (req, res) => {
  const car = cars.find((car) => car.id === req.params.id);
  if (!car) return res.status(404).json({ message: "Car not found" });
  res.status(200).json({
    status: "success",
    data: car
  });
};

// Membuat mobil baru
const createCar = (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  res.status(201).json({
    status: "success",
    data: newCar
  });
};

// Memperbarui mobil yang sudah ada
const updateCar = (req, res) => {
  const carIndex = cars.findIndex((car) => car.id === req.params.id);
  if (carIndex === -1)
    return res.status(404).json({ message: "Car not found" });
  cars[carIndex] = req.body;
  res.status(200).json({
    status: "success",
    data: cars[carIndex]
  });
};

// Menghapus mobil
const deleteCar = (req, res) => {
  const carIndex = cars.findIndex((car) => car.id === req.params.id);
  if (carIndex === -1)
    return res.status(404).json({ message: "Car not found" });
  const deletedCar = cars.splice(carIndex, 1);
  res.status(200).json({
    status: "success",
    data: deletedCar[0]
  });
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
