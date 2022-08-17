import { Container } from '@mui/material';
// layouts
import Layout from '@src/layouts';
// hooks
import useSettings from '@src/hooks/useSettings';
// components
import Page from '@components/Page';
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
// paths
import { PATH_JOBS } from '@src/routes/paths';
import useLocales from '@src/hooks/useLocales';

// ----------------------------------------------------------------------

PageOne.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageOne() {
  const { translate } = useLocales();
  const { themeStretch } = useSettings();

  return (
    <Page title={translate(PATH_JOBS.title)}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading={translate(PATH_JOBS.jobCreate.title)}
          links={[{ name: translate('create'), href: PATH_JOBS.jobCreate.path }]}
        />
      </Container>
    </Page>
  );
}
