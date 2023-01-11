const getArrayWithoutDuplicateObjectsByField = <ObjectType>(
    array: ObjectType[],
    field: keyof ObjectType,
): ObjectType[] =>
    array.filter(
        (object, index, self) =>
            index === self.findIndex(targetObject => targetObject[field] === object[field]),
    );

export { getArrayWithoutDuplicateObjectsByField };
