export interface CommonJobLocation {
  city: string;
  state: string;
  country: string;
  stateShort: string;
  continent?: string;
  cityState: string;
  name?: string;
  zipCode?: string;
  address?: string;
  coordinates: { lat: number; lng: number };
}

export interface CommonJobContent {
  businessHL: string;
  business: string;
  company?: string;
  taskHL: string;
  task: string;
  profileHL: string;
  profile: string;
  offerHL: string;
  offer: string;
  awards?: string;
  notes?: string;
  contactHL: string;
  contact: string;
  diversityHL: string;
  diversity: string;
  entryLevel: string;
  contract: string;
  employmentType: string | string[];
  jobField: string;
  category: string;
  video?: string;
  fastApply?: boolean;
  headerImage: string;
  applicationEnd: string | null;
  similarJobs: SimilarJob[];
  mobileHeaderImage?: string;
  careerSiteTags?: string[];
}

export interface CommonJobData {
  idFS: string;
  idClient: string;
  jobNumber: string;
  title: string;
  language: string;
  businessUnit: string;
  company: string;
  employmentType: string | string[];
  contract: string;
  entryLevel: string;
  entryLevel_order: string | number;
  jobField: string | string[];
  category: string;
  applicationEnd: string | null;
  locations: CommonJobLocation[];
  /** @deprecated use locations.country instead */
  country: string;
  /** @deprecated use locations.state instead */
  state: string;
  /** @deprecated use locations.stateShort instead */
  stateShort?: string;
  /** @deprecated use locations.city instead */
  city: string;
  /** @deprecated use locations.cityState instead */
  cityState: string;
  /** @deprecated use locations.address instead */
  address?: string;
  /** @deprecated use locations.street instead */
  street?: string;
  /** @deprecated use locations.zipCode instead */
  zipCode?: string;
  recruiter: string | string[];
  remote: string;
  google_employmentType: string;
  expectedStartDate: string;
  applicationUrl: string;
  postingDate: string;
  postingDate_timestamp: number;
  online: boolean;
  jobBoard_link?: string;
  applicationUrlDirect?: string;
  template?: string;
  classification?: string;
  lastUpdated?: Date | string;
  subClients?: string[];
}

/**
 * The values that job.data[string] can have
 */
export type JobValues = string | string[] | number | null;

export interface JobGeoloc {
  lat: number;
  lng: number;
}

export interface CommonJob {
  data: CommonJobData;
  content: CommonJobContent;
  _geoloc: JobGeoloc[];
  meta: {
    openai: {
      batchId: string;
      processed: boolean;
    };
    description: string;
  };
}

export type SimilarJob = Pick<
  CommonJob['data'],
  | 'idClient'
  | 'title'
  | 'city'
  | 'entryLevel'
  | 'postingDate'
  | 'jobField'
  | 'country'
  | 'applicationUrl'
  | 'company'
>;

/**
 * Part of the whole "Job" but without the content block.
 * This is used in the Job List.
 */
export type JobExcerpt = Omit<CommonJob, 'content'>;

/**
 * Part of the whole "Job" but only the part needed for the pins on the map.
 * This is used in the map.
 */
export type JobMapPin = {
  data: Pick<
    CommonJobData,
    | 'city'
    | 'company'
    | 'country'
    | 'idClient'
    | 'state'
    | 'title'
    | 'locations'
  >;
  _geoloc: JobGeoloc[];
};
