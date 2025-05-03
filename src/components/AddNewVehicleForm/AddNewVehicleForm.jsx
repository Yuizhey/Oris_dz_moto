import React, { useState } from 'react';
import styles from './AddNewVehicleForm.module.css';

function AddNewVehicleForm() {
  const [vehicleType, setVehicleType] = useState('car');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    model: '',
    number: '',
    pricePerHour: '',
    seats: '',
    horsepower: '',
    fuel: '',
    engine: '',
    doors: '',
    drive: '',
    type: '',
    luggage: '',
    frontBrake: '',
    color: '',
    gearBox: '',
    mileage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Формируем данные для отправки в соответствии с ожидаемой бэкендом структурой
      const requestData = {
        Email: formData.email,
        Name: formData.name,
        ImagePath: formData.model, // Переименовываем model в ImagePath
        PricePerHour: Number(formData.pricePerHour),
        Seats: Number(formData.seats),
        Horsepower: Number(formData.horsepower),
        Fuel: formData.fuel,
        Engine: Number(formData.engine) 
      };

      // Добавляем специфичные поля для машины или мотоцикла
      if (vehicleType === 'car') {
        requestData.Doors = Number(formData.doors);
        requestData.Drive = formData.drive;
        requestData.Type = formData.type;
        requestData.Luggage = Number(formData.luggage);
      } else {
        requestData.FrontBrake = formData.frontBrake;
        requestData.Color = formData.color;
        requestData.GearBox = formData.gearBox;
        requestData.Mileage = formData.mileage;
      }

      const endpoint = vehicleType === 'car' 
        ? 'http://www.petrov.somee.com/api/api/Car/add'
        : 'http://www.petrov.somee.com/api/api/Motorcycle/add';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Server responded with an error');
      }

      const responseData = await response.json();
      alert(`Vehicle added successfully! ID: ${responseData}`);
      
      // Сброс формы
      setFormData({
        email: '',
        name: '',
        model: '',
        number: '',
        pricePerHour: '',
        seats: '',
        horsepower: '',
        fuel: '',
        engine: '',
        doors: '',
        drive: '',
        type: '',
        luggage: '',
        frontBrake: '',
        color: '',
        gearBox: '',
        mileage: ''
      });

    } catch (error) {
      console.error('Error:', error);
      alert(`Error adding vehicle: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How Many Vehicles Do You Want To Share</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Поле для почты */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Выбор типа транспортного средства */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Vehicle Type</label>
          <select 
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className={styles.select}
          >
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>

        {/* Общие поля для всех транспортных средств */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Vehicle Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>image path</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        {/* Поля для цены */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Price Per Hour ($)</label>
            <input
              type="number"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className={styles.input}
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        {/* Поля для характеристик */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Seats</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              className={styles.input}
              min="1"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Horsepower</label>
            <input
              type="number"
              name="horsepower"
              value={formData.horsepower}
              onChange={handleChange}
              className={styles.input}
              min="1"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Fuel Type</label>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electricity">Electric</option>
            </select>
          </div>
        </div>

        {/* Поля для машины */}
        {vehicleType === 'car' && (
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Engine (L)</label>
              <input
                type="number"
                step="0.1"
                name="engine"
                value={formData.engine}
                onChange={handleChange}
                className={styles.input}
                min="0.1"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Doors</label>
              <select
                name="doors"
                value={formData.doors}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select doors</option>
                <option value="2">2</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Drive</label>
              <select
                name="drive"
                value={formData.drive}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select drive</option>
                <option value="2">Front-wheel drive (FWD)</option>
                <option value="2">Rear-wheel drive (RWD)</option>
                <option value="4">All-wheel drive (AWD)</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Vehicle Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select type</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Coupe">Coupe</option>
                <option value="Cabriolet">Cabriolet</option>
                <option value="Rodster">Rodster</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Luggage Capacity (L)</label>
              <input
                type="number"
                name="luggage"
                value={formData.luggage}
                onChange={handleChange}
                className={styles.input}
                min="0"
                required
              />
            </div>
          </div>
        )}

        {/* Поля для мотоцикла */}
        {vehicleType === 'motorcycle' && (
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Engine (cc)</label>
              <input
                type="number"
                name="engine"
                value={formData.engine}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Front Brake</label>
              <select
                name="frontBrake"
                value={formData.frontBrake}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select brake</option>
                <option value="Disc">Disc</option>
                <option value="Drum">Drum</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Gear Box</label>
              <select
                name="gearBox"
                value={formData.gearBox}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select gearbox</option>
                <option value="4">4-Speed</option>
                <option value="5">5-Speed</option>
                <option value="6">6-Speed</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Mileage (km)</label>
              <input
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className={styles.input}
                min="0"
                required
              />
            </div>
          </div>
        )}

        {/* Кнопка отправки формы */}
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton} onClick={handleSubmit}>Add Vehicle</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewVehicleForm;
