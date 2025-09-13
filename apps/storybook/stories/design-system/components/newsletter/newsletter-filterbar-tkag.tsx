import { filterTypes as by } from "@repo/design-system/types/filter";
import { useClientContext } from "~/components/registry";
import { useLanguage } from "~/translations/loader/use-language";
import { GroupSelect } from "../filterbar/filters/group-select-tkag";
import { LocationSelect } from "../filterbar/filters/location-select-tkag";
import { MultiSelect } from "../filterbar/filters/multi-select";

export function NewsletterFilterbar() {
  const t = useLanguage();
  const {
    ui: { filterGroups },
  } = useClientContext();
  return (
    <section
      className="grid w-full min-w-full grid-flow-row justify-items-center gap-4 pb-4 lg:grid-cols-2"
      id="newsletter_filterbar"
    >
      <MultiSelect
        filterBy={[by.JOB_FIELD]}
        id="4"
        label={t.filterbar_filter4_placeholder}
      />

      <MultiSelect
        filterBy={[by.ENTRY_LEVEL]}
        id="2"
        label={t.filterbar_filter2_placeholder}
      />

      <GroupSelect
        filterBy={filterGroups}
        id="3"
        label={t.filterbar_filter3_placeholder}
      />

      <MultiSelect
        filterBy={[by.REMOTE]}
        id="9"
        label={t.filterbar_filter7_placeholder}
      />

      <MultiSelect
        filterBy={[by.BUSINESS_UNIT]}
        id="5"
        label={t.filterbar_filter5_placeholder}
      />
      <MultiSelect
        filterBy={[by.COMPANY]}
        id="8"
        label={t.filterbar_filter6_placeholder}
      />

      <LocationSelect
        id="location-select"
        label={t.filterbar_filter1_placeholder}
      />

      <MultiSelect
        filterBy={[by.LANGUAGE]}
        id="8"
        label={t.filterbar_filter8_placeholder}
      />
    </section>
  );
}
