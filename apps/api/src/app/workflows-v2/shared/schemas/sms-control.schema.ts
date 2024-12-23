import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { JSONSchemaDto, UiComponentEnum, UiSchema, UiSchemaGroupEnum } from '@novu/shared';
import { skipZodSchema, skipStepUiSchema } from './skip-control.schema';

export const smsControlZodSchema = z
  .object({
    skip: skipZodSchema,
    body: z.string(),
  })
  .strict();

export type SmsControlType = z.infer<typeof smsControlZodSchema>;

export const smsControlSchema = zodToJsonSchema(smsControlZodSchema) as JSONSchemaDto;
export const smsUiSchema: UiSchema = {
  group: UiSchemaGroupEnum.SMS,
  properties: {
    body: {
      component: UiComponentEnum.SMS_BODY,
    },
    skip: skipStepUiSchema.properties.skip,
  },
};