from pytube import YouTube, Search
from pytube.exceptions import VideoUnavailable
import pytube.request
from time import perf_counter

import os
import sys

# Callback function that is called each time a chunk of the stream is downloaded.
# The progress bar is instantly filled since PyTube is configured by default to send 9mb chunks at a time. Since the song file is most 
# likely less than 9mb, only one chunk is sent causing the callback function to be called only once.
def on_progress(stream, chunk, bytes_remaining):
    curr = stream.filesize - bytes_remaining
    done = int(50 * curr / stream.filesize)
    sys.stdout.write("\r[{}{}] ".format('=' * done, ' ' * (50-done)) )
    sys.stdout.flush()

class Importer:
    def __init__(self, output_path):
        self.output_path = output_path

    def importMP3(self, artistTitles):
        overallStart = perf_counter()
        for artist in artistTitles:
            for song in artistTitles[artist]:
                start = perf_counter()
                searchStr = f'{artist} - {song}'
                try:
                    yt = Search(searchStr)
                except VideoUnavailable:
                    print(f'{searchStr} unavailable to download...Skipping...')
                else:
                    yt.results[0].register_on_progress_callback(on_progress)
                    stream = yt.results[0].streams.filter(file_extension='mp4', progressive=True).first()
                    out_file = stream.download(output_path=self.output_path)
                    base, ext = os.path.splitext(out_file)
                    new_file = base + '.mp3'
                    os.rename(out_file, new_file)
                    end = perf_counter()
                    print(f'{searchStr} -> Download Complete in {round(end - start, 2)}s')
        overallEnd = perf_counter()
        print(f'All Downloads Complete.\nTotal Time: {round(overallEnd - overallStart, 2)}s.')

# artistTitle = {
#     'San Holo': ['i just wanna fucking cry', 'BRING BACK THE COLOR (feat. AURORA)', 'TINY FLOWERS', 'feel something real', 'One Thing', 'IMYSM', "DON'T LOOK DOWN (feat. Lizzy Land)", 'ENERGY (feat. What So Not)'], 'Weird Genius': ['Future Ghost (feat. Violette Wautier)'], 'AmPm': ['Everyday'], 'BUNT.': ['say you´re with me'], 'Arize': ['Over You'], 'Home By Dawn': ['Wild'], 'HHMR': ['Once More'], 'Tokyo Machine': ['Last Summer']
# }

# artistTitle = {
#     'Tokyo Machine': ['Last Summer'],
#     'HHMR': ['Once More']
# }

# importer = Importer("./Downloads/TouchYourFeels")
# importer.importMP3(artistTitle)

