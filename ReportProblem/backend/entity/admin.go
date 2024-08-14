package entity

import "gorm.io/gorm"

type Admin struct {
    gorm.Model
    AdminID    string `gorm:"primaryKey"`
    Username   string
    FullName   string
    Phone      string
    Password   string

    // 1 แอดมินอนุมัติการซ่อมได้หลายรอบ
    Repairings  []Repairing `gorm:"foreignKey:AdminID"`

    // 1 แอดมินอนุมัติฟอร์มผ่อนผันค่าหอพักได้หลายรอบ
    DelayedPaymentForms  []DelayedPaymentForm `gorm:"foreignKey:AdminID"`

    // 1 นักศึกษาเข้า-ออกหอพักได้หลายรอบ
    En_ExitingForms  []En_ExitingForm `gorm:"foreignKey:AdminID"`

    // 1 นักศึกษาลาออกจากหอพักได้ 1 รอบ
    ResigningForms  []ResigningForm `gorm:"foreignKey:AdminID"`
}