package entity

import (
	"time"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	StudentID  	string
	Password  	string
	FirstName 	string
	LastName  	string
	Year      	uint
	Birthday  	time.Time
	Gender 		string
	Major 		string

	// RoomID ทำหน้าที่เป็น FK
	RoomID *uint
	Room   Room gorm:"foriegnKey:RoomID"

}