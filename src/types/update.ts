export interface GithubRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  body: string;

  id: number;
  node_id: string;

  tag_name: string;
  target_commitish: string;
  name: string;

  created_at: string;
  published_at: string;

  assets: GithubAsset[];

  tarball_url: string;
  zipball_url: string;
}

export interface GithubAsset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: any;

  content_type: string;
  state: string;
  size: number;

  browser_download_url: string; // this
}
