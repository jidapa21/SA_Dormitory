package entity

import "gorm.io/gorm"

type Dorm struct {
	gorm.Model
	Type 		string
	DormGender 	string

	// 1 dorm เป็นเจ้าของได้หลาย Rooms
	Rooms []Room gorm:"foreignKey:DormID"
}