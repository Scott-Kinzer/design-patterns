/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
interface MediaPlayer {
  play(filename: string): void;
}

interface AdvancedMediaPlayer {
  playMp4(filename: string): void;
  playVlc(filename: string): void;
}

class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(filename: string): void {
    console.log('Playing VLC file:', filename);
  }

  playMp4(filename: string): void {}
}

class Mp4Player implements AdvancedMediaPlayer {
  playVlc(filename: string): void {}

  playMp4(filename: string): void {
    console.log('Playing MP4 file:', filename);
  }
}

// Adapter
class MediaAdapter implements MediaPlayer {
  private advancedMediaPlayer: AdvancedMediaPlayer;

  constructor(filename: string) {
    if (filename.endsWith('.vlc')) {
      this.advancedMediaPlayer = new VlcPlayer();
    } else if (filename.endsWith('.mp4')) {
      this.advancedMediaPlayer = new Mp4Player();
    } else {
      throw new Error('Unsupported file format');
    }
  }

  play(filename: string): void {
    if (filename.endsWith('.vlc')) {
      this.advancedMediaPlayer.playVlc(filename);
    } else if (filename.endsWith('.mp4')) {
      this.advancedMediaPlayer.playMp4(filename);
    } else {
      throw new Error('Unsupported file format');
    }
  }
}

// Client
class AudioPlayer implements MediaPlayer {
  play(filename: string): void {
    const mediaAdapter = new MediaAdapter(filename);
    mediaAdapter.play(filename);
  }
}

const audioPlayer = new AudioPlayer();
audioPlayer.play('sample.mp3');
audioPlayer.play('sample.vlc');
audioPlayer.play('sample.mp4');
