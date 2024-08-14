package main

import (
  "github.com/jidapa21/SA_Dormitory/ReportProblem/backend/entity"
  "gorm.io/gorm"
  "gorm.io/driver/sqlite"
  
)

func main() {
  
	db, err := gorm.Open(sqlite.Open("dorm-entity.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&entity.Student{}, &entity.Dorm{}, &entity.Room{}, 
                 &entity.Admin{}, &entity.Repairing{}, &entity.DelayedPaymentForm{},
                 &entity.En_ExitingForm{}, &entity.ResigningForm{}, &entity.CurrentAddress{}, )
}
