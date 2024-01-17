import { EnumMedicineColor, EnumMedicineType } from '@app/enums'

export const MEDICINE_TYPE_COLORS: Record<EnumMedicineType, EnumMedicineColor> =
	{
		[EnumMedicineType.pill]: EnumMedicineColor.red,
		[EnumMedicineType.liquid]: EnumMedicineColor.blue,
		[EnumMedicineType.injection]: EnumMedicineColor.darkGreen,
		[EnumMedicineType.cream]: EnumMedicineColor.darkRed,
		[EnumMedicineType.drops]: EnumMedicineColor.lightBlue,
		[EnumMedicineType.candles]: EnumMedicineColor.darkOrange,
		[EnumMedicineType.pencil]: EnumMedicineColor.darkPurple,
		[EnumMedicineType.powder]: EnumMedicineColor.orange,
		[EnumMedicineType.spray]: EnumMedicineColor.darkBlue,
		[EnumMedicineType.bandage]: EnumMedicineColor.lightPurple,
	}
