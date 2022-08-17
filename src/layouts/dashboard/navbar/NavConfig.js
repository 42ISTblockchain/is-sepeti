// components
import SvgIconStyle from '@components/SvgIconStyle';
import { PATH_GENERAL, PATH_JOBS } from '@src/routes/paths';
import Iconify from '@src/components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  jobCreate: <Iconify icon="gridicons:create" />,
  jobPosting: <Iconify icon="bi:file-earmark-post" />,
  jobApplications: <Iconify icon="carbon:user-role" />,
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: PATH_GENERAL.subheader,
    items: [{ title: PATH_GENERAL.root.title, path: PATH_GENERAL.root.path, icon: ICONS.analytics }],
  },
  {
	subheader: PATH_JOBS.subheader,
    items: [
      { title: PATH_JOBS.jobCreate.title, path: PATH_JOBS.jobCreate.path, icon: ICONS.jobCreate },
      { title: PATH_JOBS.jobPosting.title, path: PATH_JOBS.jobPosting.path, icon: ICONS.jobPosting },
      { title: PATH_JOBS.jobApplications.title, path: PATH_JOBS.jobApplications.path, icon: ICONS.jobApplications },
     
    ],
  }
];

export default navConfig;
