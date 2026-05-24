import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://maderasponotro.cl'
const DEFAULT_TITLE = 'Maderas Ponotro | Elaboración e Impregnación de Maderas'
const DEFAULT_DESCRIPTION =
    'Maderas Ponotro: elaboración, dimensionado e impregnación de maderas en la Región del Biobío. Despacho a Cañete, Lebu, Concepción y Talcahuano.'

/**
 * Reusable SEO component. Pass `title` / `description` to override the defaults
 * for a specific section/page. The `path` prop (e.g. "/productos") sets the
 * canonical and og:url; defaults to "/" so the homepage is self-canonical.
 */
function SEO({ title, description, path = '/' }) {
    const fullTitle = title ? `${title} | Maderas Ponotro` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESCRIPTION
    const url = `${SITE_URL}${path}`

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={desc} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={desc} />
        </Helmet>
    )
}

export default SEO
