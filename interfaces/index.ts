import { GenderEnum, PopularityEnum, LengthEnum } from '~/interfaces/enum'

export interface OptionsState {
  gender: GenderEnum,
  popularity: PopularityEnum;
  length: LengthEnum
};

export interface NameObject {
  id: number,
  name: string,
  gender: GenderEnum,
  popularity: PopularityEnum,
  length: LengthEnum
}
