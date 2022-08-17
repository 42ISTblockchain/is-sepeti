import { Container } from '@mui/material';
// layouts
import Layout from '@src/layouts';
// hooks
import useSettings from '@src/hooks/useSettings';
// components
import Page from '@components/Page';
import HeaderBreadcrumbs from '@components/HeaderBreadcrumbs';
// paths
import { PATH_GENERAL } from '@src/routes/paths';
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
    <Page title={translate(PATH_GENERAL.root.title)}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading={translate(PATH_GENERAL.root.title)}
          links={[{ name: translate('dashboard'), href: PATH_GENERAL.root.path }]}
        />
      </Container>
    </Page>
  );
}