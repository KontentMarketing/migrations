import {
  HorizonsAgendaModel,
  HorizonsHeroSectionModel,
  HorizonsLocationsModel,
  HorizonsRecordingsModel,
  HorizonsRegisterModel,
  contentTypes,
} from '../models'

export function isHorizonsAgendaModel(item: any): item is HorizonsAgendaModel {
  return item.system.type === contentTypes.horizons___agenda.codename
}

export function isHorizonsLocationsModel(
  item: any
): item is HorizonsLocationsModel {
  return item.system.type === contentTypes.horizons___locations.codename
}

export function isHorizonsRegisterModel(
  item: any
): item is HorizonsRegisterModel {
  return item.system.type === contentTypes.horizons___register.codename
}

export function isHorizonsRecordingsModel(
  item: any
): item is HorizonsRecordingsModel {
  return item.system.type === contentTypes.horizons___recordings.codename
}

export function isHorizonsHeroSectionModel(
  item: any
): item is HorizonsHeroSectionModel {
  return item.system.type === contentTypes.horizons___hero_section.codename
}
