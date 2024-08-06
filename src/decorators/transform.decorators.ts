import { Transform } from "class-transformer";

export function Trim() {
  return Transform(({ value }) => {
      if (typeof value === 'string') {
          return value.trim();
      }
      return value;
  });
}

export function ToBoolean(): PropertyDecorator {
    return Transform(
      (params) => {
        switch (params.value) {
          case 'true': {
            return true;
          }
  
          case 'false': {
            return false;
          }
  
          default: {
            return params.value;
          }
        }
      },
      { toClassOnly: true },
    );
}