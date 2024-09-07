package entity

import (
    "time"
    "gorm.io/gorm"
)

type En_ExitingForm struct {
    gorm.Model
	Date_Submission	time.Time
	request			string
    Because_Of		string
	Date_Request	time.Time
    Status			string

    // StudentID ทำหน้าที่เป็น FK
    Student_ID	string
    Student		Student `gorm:"foreignKey:Student_ID"`

    // AdminID ทำหน้าที่เป็น FK
    Admin_ID	string
    Admin		Admin `gorm:"foreignKey:Admin_ID"`

}