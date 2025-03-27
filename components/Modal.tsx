
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo({ isOpen, setIsOpen }: any) {

   
  return (
    <div className="bg-white">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
         
        </DialogTrigger>
        <DialogContent className="max-w-7xl">
          <DialogHeader>
            
          <DialogTitle className="hidden m-0">Edit profile</DialogTitle>
            <DialogDescription>
              <video
                width={100}
                height=""
                autoPlay
                controls
                preload="none"
                className="w-full rounded-lg"
              >
                <source
                  src="/video.mp4"
                  type="video/mp4"
                />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
