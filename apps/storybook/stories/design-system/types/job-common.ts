import type {
  CommonJob,
  CommonJobContent,
  CommonJobData,
} from '@repo/design-system/types/job';
import type { ComponentProps } from 'react';

export interface EventDateTime {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface RelatedJobs {
  idClient: string;
  url: string;
  headerImage: string;
  title: string;
  city: string;
}

export interface JobData extends CommonJobData {
  id?: string;
  openingId?: string;
  address?: string;
  classification?: string;
  freiTextFeld3?: string;
  joblistLogo?: string;
  remote_raw?: string;
  salaryInfo?: string;
  socialInsurance?: string;
  source?: string;
  subClients?: string[];
  template?: string;
  blueCollarWhiteCollar?: string;
  additionalInfo?: string;
  targetGroup?: string[];
  entryLevelOrder?: string | number;
}

export interface JobContent extends CommonJobContent {
  categoryImages?: string[] | null;
  compensation?: string;
  employerSeal?: string;
  entryLevel_order?: string | number;
  jobadVideo?: string;
  eventDateTime?: EventDateTime;
  relatedJobs?: RelatedJobs[];
  verlinkung?: string;
  // similarJobs: SimilarJob[];
}

// type SimilarJob = {
//   idClient: string;
//   title: string;
//   city: string;
//   entryLevel: string;
//   postingDate: string;
//   jobField: string;
//   country: string;
// };

export interface Job extends CommonJob {
  data: JobData;
  content: JobContent;
}

/**
 * JobExcerpt is redefined here using the client-specific Job type,
 * because some properties like `jobBoard_link` are only available
 * in this client's job data and do not exist in the global JobExcerpt.
 */
export type JobExcerpt = Omit<Job, 'content'>;

export type JobadComponentProps = ComponentProps<typeof Job>;
