package entity

import (
    "time"
    "gorm.io/gorm"
)

type Student struct {
    gorm.Model
    StudentID   string `gorm:"primaryKey"`
    Password    string
    FirstName   string
    LastName    string
    Year        uint
    Birthday    time.Time
    Gender      string
    Major       string

    // RoomID ทำหน้าที่เป็น FK
    RoomID      string
    Room        Room `gorm:"foreignKey:RoomID"`

    // 1 นักศึกษาแจ้งซ่อมได้หลายรอบ
    Repairings  []Repairing `gorm:"foreignKey:StudentID"`

    // 1 นักศึกษาผ่อนผันค่าหอพักได้หลายรอบ
    DelayedPaymentForms  []DelayedPaymentForm `gorm:"foreignKey:StudentID"`

    // 1 นักศึกษาเข้า-ออกหอพักได้หลายรอบ
    En_ExitingForms  []En_ExitingForm `gorm:"foreignKey:StudentID"`

    // 1 นักศึกษาลาออกจากหอพักได้ 1 รอบ
    ResigningForms  []ResigningForm `gorm:"foreignKey:StudentID"`
}