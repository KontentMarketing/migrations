import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import KontentService from './services/KontentService'
import { ContentItemYoutubeVideoModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 19,
  run: async () => {
    const videos = (
      await KontentService.Instance()
        .deliveryClient.items<ContentItemYoutubeVideoModel>()
        .type(contentTypes.content_item___youtube_video.codename)
        .toPromise()
    ).data.items

    const publishedVideos = videos.map((video) => {
      return {
        video_id: video.elements.videoId.value,
      }
    })

    fs.writeFileSync(
      './src/data/yt_videos.json',
      JSON.stringify(publishedVideos, null, 2)
    )
  },
}

export default migration
