/** @type {import('next').NextConfig} */

// Quando o build roda dentro do GitHub Actions, o GitHub já injeta
// automaticamente a variável GITHUB_REPOSITORY (ex: "usuario/nome-do-repo").
// Usamos isso pra descobrir o nome do repositório e configurar o
// caminho correto do GitHub Pages (usuario.github.io/nome-do-repo/).
// Se o repositório se chamar "usuario.github.io" (página raiz do usuário),
// não precisa de basePath nenhum.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const isUserRootPage = repo.endsWith('.github.io')
const basePath = isGithubActions && repo && !isUserRootPage ? `/${repo}` : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
