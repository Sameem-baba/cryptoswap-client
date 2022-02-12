import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 't2m8sloj',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk82wgS2RSAygpaIQb2JhLzcupvhRPHGhfm5VMbKMIWwOfCgO6EiJE3QSNYFOFvLYYeEGnRbYd9iZyw6dhRrJFj47gnCj2oOBEStlM51tgJQRRcGnrUKS52Z0HuipjUVbSWAkFQSKu430E1z0o2UXnPsPFMvR2T0qy70RyWveY0lD72AjDs5',
  useCdn: false,
})
