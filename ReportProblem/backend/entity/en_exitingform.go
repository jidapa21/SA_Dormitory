package entity

import (
    "time"
    "gorm.io/gorm"
)

type En_ExitingForm struct {
    gorm.Model
    Name			string
	DateSubmission	time.Time
	reques			string
    BecauseOf		string
	DateReques		time.Time
    Status			string

    // StudentID ทำหน้าที่เป็น FK
    StudentID  string
    Student    Student `gorm:"foreignKey:StudentID"`

    // AdminID ทำหน้าที่เป็น FK
    AdminID    string
    Admin      Admin `gorm:"foreignKey:AdminID"`

}