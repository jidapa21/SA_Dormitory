package entity

import (
    "time"
    "gorm.io/gorm"
)

type DelayedPaymentForm struct {
    gorm.Model
    Name			string
    DormPayment		float64
    ElectriclyBill  float64
    WaterBill		float64
    BecauseOf		string
	DueDate			time.Time
    Status			string

    // StudentID ทำหน้าที่เป็น FK
    StudentID  string
    Student    Student `gorm:"foreignKey:StudentID"`

    // AdminID ทำหน้าที่เป็น FK
    AdminID    string
    Admin      Admin `gorm:"foreignKey:AdminID"`
}