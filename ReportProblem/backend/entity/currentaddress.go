package entity

import "gorm.io/gorm"

type CurrentAddress struct {
    gorm.Model
    HouseNo			string
    VillageNo		string
    Alley			string
    Road			string
    SubDistrict		string
    District		string
    province		string
	post_code		string
}