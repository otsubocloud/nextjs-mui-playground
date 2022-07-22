howt to deploy

`yarn build`

`ssh sakura`

`cd /home/idea`

`rm -rf ./.next`

*.next をSFTPでコピペ*

***sakuraサーバー上でyarn buildすると30分以上かかるのでやらないように***

`git pull`

`yarn deploy`