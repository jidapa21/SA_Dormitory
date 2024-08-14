package entity

import (
    "time"
    "gorm.io/gorm"
)

type DelayedPaymentForm struct {
    gorm.Model
    Name			string
    DormPayment		double
    ElectriclyBill  double
    WaterBill		double
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