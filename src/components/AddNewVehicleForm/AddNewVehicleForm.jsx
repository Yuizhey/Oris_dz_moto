import React, { useState } from 'react';
import styles from './AddNewVehicleForm.module.css'; // Импорт модульных стилей

function AddNewVehicleForm() {
  const [vehicleType, setVehicleType] = useState('car');
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    number: '',
    pricePerHour: '',
    zipCode: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      vehicleType
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How Many Vehicles Do You Want To Share</h2>
      
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

      <form onSubmit={handleSubmit} className={styles.form}>
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

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Vehicle Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Vehicle Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Set Your Own Price</label>
            <input
              type="number"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        {/* Общие характеристики */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Seats</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              className={styles.input}
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
              <option value="Electric">Electric</option>
            </select>
          </div>
        </div>

        {/* Специфические поля для автомобиля */}
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
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Doors</label>
              <input
                type="number"
                name="doors"
                value={formData.doors}
                onChange={handleChange}
                className={styles.input}
                required
              />
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
                <option value="FWD">Front-wheel drive</option>
                <option value="RWD">Rear-wheel drive</option>
                <option value="AWD">All-wheel drive</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Vehicle Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Luggage Capacity (L)</label>
              <input
                type="number"
                name="luggage"
                value={formData.luggage}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>
        )}

        {/* Специфические поля для мотоцикла */}
        {vehicleType === 'motorcycle' && (
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Engine (L)</label>
              <input
                type="number"
                step="0.001"
                name="engine"
                value={formData.engine}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Front Brake</label>
              <input
                type="text"
                name="frontBrake"
                value={formData.frontBrake}
                onChange={handleChange}
                className={styles.input}
                required
              />
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
              <input
                type="text"
                name="gearBox"
                value={formData.gearBox}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Mileage (km)</label>
              <input
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          Done
        </button>
      </form>
    </div>
  );
}

export default AddNewVehicleForm;