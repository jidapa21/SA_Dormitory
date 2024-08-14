package entity

import (
    "time"
    "gorm.io/gorm"
)

type ResigningForm struct {
    gorm.Model
    Name			string
	Date			time.Time
    BecauseOf		string
	Accommodation	string
    PhoneNumber		string
    Status			string

    // StudentID ทำหน้าที่เป็น FK
    StudentID  string
    Student    Student `gorm:"foreignKey:StudentID"`

    // AdminID ทำหน้าที่เป็น FK
    AdminID    string
    Admin      Admin `gorm:"foreignKey:AdminID"`

	// CurrentAddressID ทำหน้าที่เป็น FK
	CurrentAddressID    string
	CurrentAddress      CurrentAddress `gorm:"foreignKey:CurrentAddressID"`
}