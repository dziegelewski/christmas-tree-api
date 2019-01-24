import { ApiModelProperty } from '@nestjs/swagger';

export class TreeModel {
  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  name: string;
  
  @ApiModelProperty()
  price: number;

  @ApiModelProperty()
  features: string[];

  @ApiModelProperty()
  image: string;
}
