const mapperEntityToDto = <Entity, DTO>(entity: Entity): DTO => {
  const allowedKeys = Object.keys(entity);

  const mappedDto: any = {};
  for (const key of allowedKeys) {
    if (entity.hasOwnProperty(key)) {
      mappedDto[key] = entity[key];
    }
  }

  return mappedDto;
};