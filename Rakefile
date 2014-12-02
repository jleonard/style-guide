



desc "clean"
task :clean do
  sh "rm -rf js/ css/ *.html bower.json"
end

desc "build everything"
task :build => [:clean] do
  sh "echo -e \"\033[42;30mmoving readme into harp project...\033[0m\""
  sh "cp README.md src/index.md"
  sh "harp compile src dist"
  sh "cp -R dist/* ."
  sh "rm src/index.md"
end