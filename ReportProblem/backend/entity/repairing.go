package entity

import "gorm.io/gorm"

type Repairing struct {
    gorm.Model
    Subject          string
    Detail           string
    Image            []byte // ใช้ []byte แทน blob
    LocationDetails  string
    Contact          string
    TimeSlot         string
    Remarks          string
    Status           string

    // StudentID ทำหน้าที่เป็น FK
    StudentID  string
    Student    Student `gorm:"foreignKey:StudentID"`

    // AdminID ทำหน้าที่เป็น FK
    AdminID    string
    Admin      Admin `gorm:"foreignKey:AdminID"`
}