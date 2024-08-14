package entity

import "gorm.io/gorm"

type Room struct {
    gorm.Model
    RoomID       string `gorm:"primaryKey"`
    RoomNumber   uint
    Available    string
    Confirmation string

    // DormID ทำหน้าที่เป็น FK
    DormID       uint
    Dorm         Dorm `gorm:"foreignKey:DormID"`

    // 1 ห้อง มีนักศึกษาได้หลายคน
    Students     []Student `gorm:"foreignKey:RoomID"`
}