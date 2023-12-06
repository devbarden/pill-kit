import { EnumMedicineColor, EnumMedicineType } from '@app/enums'

export const MEDICINE_TYPE_COLORS: Record<EnumMedicineType, EnumMedicineColor> =
	{
		[EnumMedicineType.pill]: EnumMedicineColor.red,
		[EnumMedicineType.liquid]: EnumMedicineColor.black,
		[EnumMedicineType.injection]: EnumMedicineColor.champagne,
		[EnumMedicineType.cream]: EnumMedicineColor.lightBlue,
		[EnumMedicineType.drops]: EnumMedicineColor.blue,
		[EnumMedicineType.candles]: EnumMedicineColor.darkBlue,
		[EnumMedicineType.pencil]: EnumMedicineColor.green,
		[EnumMedicineType.powder]: EnumMedicineColor.orange,
		[EnumMedicineType.spray]: EnumMedicineColor.darkRed,
		[EnumMedicineType.bandage]: EnumMedicineColor.purple,
	}
