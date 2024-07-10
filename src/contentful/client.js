import { createClient } from 'contentful';

import { CONTENTFUL_KEYS } from '../helpers/enums';

class ContentClient {
  constructor() {
    this.client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });
  }

  getProjects(options) {
    return this.client.getEntries({
      content_type: CONTENTFUL_KEYS.PROJECTS,
      ...options,
    });
  }

  getBlogs(options) {
    return this.client.getEntries({
      content_type: CONTENTFUL_KEYS.BLOGS,
      ...options,
    });
  }

  getWorkHistory(options) {
    return this.client.getEntries({
      content_type: CONTENTFUL_KEYS.WORK_HISTORY,
      ...options,
    });
  }
}

const contentClient = new ContentClient();

export default contentClient;
