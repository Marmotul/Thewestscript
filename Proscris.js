// ==UserScript==
// @name         Poscris WEST DE EXPERTI varianta premium
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Untrakable
// @author       Proscris
// @include https://*.the-west.*/game.php*
// @icon         data:image/jpeg;base64,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
// @grant        none
// ==/UserScript==


(function() {

    function JobPrototype(x,y,id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.silver = false;
        this.distance = 0;
        this.experience = 0;
        this.money = 0;
        this.motivation = 0;
        this.stopMotivation = 75;
        this.set = -1;
    };
    JobPrototype.prototype = {
        setSilver: function(isSilver) {
            this.silver = isSilver;
        },
        calculateDistance:function() {
            this.distance = GameMap.calcWayTime({x:this.x,y:this.y},Character.position);
        },
        setExperience:function(xp) {
            this.experience = xp;
        },
        setMoney:function(money) {
            this.money = money;
        },
        setMotivation:function(motivation) {
            this.motivation = motivation;
        },
        setStopMotivation:function(stopMotivation) {
            this.stopMotivation = stopMotivation;
        },
        setSet:function(setIndex) {
            this.set = setIndex;
        }
    };
    function ConsumablePrototype(id,image,name) {
        this.id = id;
        this.energy = 0;
        this.motivation = 0;
        this.health = 0;
        this.selected = true;
        this.image = image;
        this.count = 0;
        this.name = name;
    };
    ConsumablePrototype.prototype = {
        setEnergy:function(energy) {
            this.energy = energy;
        },
        setMotivation:function(motivation) {
            this.motivation = motivation;
        },
        setHealth:function(health) {
            this.health = health;
        },
        setSelected:function(select) {
            this.selected = select;
        },
        setCount:function(count) {
            this.count = count;
        }
    };

     Proscris = {
         window:null,
         jobsLoaded:false,
         allJobs:[],
         allConsumables:[],
         consumableUsed:[],
         addedJobs:[],
         forts:[],
         homeTown:null,
         jobFilter:{filterOnlySilver:false,filterNoSilver:false,filterCenterJobs:false,filterJob:""},
         sortJobTableXp:0,
         sortJobTableDistance:0,
         jobTablePosition:{content:"0px",scrollbar:"0px"},
         addedJobTablePosition:{content:"0px",scrollbar:"0px"},
         consumableTablePosition:{content:"0px",scrollbar:"0px"},
         currentState:0,
         states:["idle","running","waiting for a consumable cooldown"],
         sets:null,
         selectedSet:0,
         selectedSleepPlace:-2,
         travelSet:-1,
         jobSet:-1,
         healthSet:-1,
         regenerationSet:-1,
         language:"",
         searchKeys:{
             "en_DK":{
                 energy:"Energy",
                 energyText:"Energy increase:",
                 motivation:"Work motivation",
                 motivationText:"Work motivation increase:",
                 health: "Health point bonus",
                 healthText:"Health point bonus:"
             },
             "sk_SK":{
                 energy:"Energia",
                 energyText:"Zvýšenie energie:",
                 motivation:"Pracovnej motivácie",
                 motivationText:"Zvýšenie pracovnej motivácie:",
                 health: "Bonus bodov zdravia",
                 healthText:"Bonus bodov zdravia:"
             },
             "cs_CZ":{
                 energy:"Energie",
                 energyText:"Zvýšení energie:",
                 motivation:"Pracovní motivace",
                 motivationText:"Zvýšení pracovní motivace:",
                 health: "Bonus zdraví",
                 healthText:"Bonus zdraví:"
             },
             "hu_HU":{
                 energy:"Energia növekedése:",
                 energyText:"Energia növekedése:",
                 motivation:"Munka motiváció növelése:",
                 motivationText:"Munka motiváció növelése:",
                 health: "Életerő bónusz",
                 healthText:"Életerő bónusz:"
             },
             "pl_PL":{
                 energy:"Wzrost energii:",
                 energyText:"Wzrost energii:",
                 motivation:"Zwiększenie motywacji do pracy:",
                 motivationText:"Zwiększenie motywacji do pracy:",
                 health: "Bonus Punktów życia:",
                 healthText:"Bonus Punktów życia:"
             },
             "ro_RO":{
                 energy:"Energie mărită:",
                 energyText:"Energie mărită:",
                 motivation:"Creștere a motivației de muncă:",
                 motivationText:"Creștere a motivației de muncă:",
                 health: "Puncte de viață:",
                 healthText:"Puncte de viață:"
             },


         },
         consumableSelection:{energy:false,motivation:false,health:false},
         isRunning:false,
         currentJob:{job:0,direction:true},
         jobRunning:false,
         settings:{
             addEnergy:false,
             addMotivation:false,
             addHealth:false,
             healthStop:10,
             setWearDelay:5,
             jobDelayMin:0,
             jobDelayMax:0,
             enableRegeneration:false
         },
         statistics:{
             jobsInSession:0,
             xpInSession:0,
             totalJobs:0,
             totalXp:0,
         }

    };


    Proscris.isNumber = function(potentialNumber) {
        return Number.isInteger(parseInt(potentialNumber));
    };

    Proscris.generateRandomNumber = function(min,max) {
        var minN = Math.min(min,max);
        var maxN = Math.max(min,max);

        var number =  Math.floor((minN + Math.random() * (maxN-minN+1)));
        console.log("Generated job set delay is :" + number + " seconds");
        return number;
    }



    Proscris.loadJobs = function() {
    // Open the map first
    GameMap.open();

    if(!Proscris.jobsLoaded) {
        new UserMessage("Loading...", UserMessage.TYPE_HINT).show();
        var tiles = [];
        var index = 0;
        var currentLength = 0;
        var maxLength = 299;
        Ajax.get('map','get_minimap',{},function(r){
            var tiles = [];
            var jobs = [];

            for(var townNumber in r.towns) {
                if(r.towns[townNumber].town_id == Character.homeTown.town_id) {
                    Proscris.homeTown = r.towns[townNumber];
                    break;
                }
            }

            var allowedJobIds = [
              170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
              185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
              200, 201, 202, 203, 204, 205, 130, 131, 132, 133, 134, 135, 136, 137, 138,
              139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
              154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
              169
            ];

            for (var jobGroup in r.job_groups) {
                var group = r.job_groups[jobGroup];
                var jobsGroup = JobList.getJobsByGroupId(parseInt(jobGroup));
                for (var tilecoord = 0; tilecoord < group.length; tilecoord++) {
                    var xCoord = Math.floor(group[tilecoord][0] / GameMap.tileSize);
                    var yCoord = Math.floor(group[tilecoord][1] / GameMap.tileSize);

                    if (currentLength == 0) {
                        tiles[index] = [];
                    }
                    tiles[index].push([xCoord, yCoord]);
                    currentLength++;

                    if (currentLength == maxLength) {
                        currentLength = 0;
                        index++;
                    }

                    // Filter jobs by ID
                    for (var i = 0; i < jobsGroup.length; i++) {
                        if (allowedJobIds.includes(jobsGroup[i].id)) { // Check if ID is allowed
                            jobs.push(new JobPrototype(group[tilecoord][0], group[tilecoord][1], jobsGroup[i].id));
                        }
                    }
                }
            }

            var toLoad = tiles.length;
            var loaded = 0;
            for(var blocks = 0; blocks < tiles.length;blocks++) {
                GameMap.Data.Loader.load(tiles[blocks],function(){
                    loaded++;
                    if(loaded == toLoad) {
                        Proscris.jobsLoaded = true;
                        Proscris.allJobs = jobs;
                        Proscris.findAllConsumables();
                        Proscris.createWindow();
                    }
                });
            }
        });
    } else {
        Proscris.findAllConsumables();
        Proscris.createWindow();
    }
};
    Proscris.loadJobData = function(callback) {
        Ajax.get('work','index',{},function(r) {
            if(r.error) {
                console.log(r.error);
                return;
            }
            JobsModel.initJobs(r.jobs);
            callback();
        });
    Proscris.loadSets = function(callback) {
        Ajax.remoteCallMode('inventory', 'show_equip', {}, function(r) {
            Proscris.sets = r.data;
            callback();
        });
    };
    Proscris.loadLanguage = function() {
        Ajax.remoteCall("settings", "settings", {}, function(resp) {
             Proscris.language = resp.lang.account.key;
         });
    };
    Proscris.loadJobMotivation = function(index,callback) {
        Ajax.get('job','job',{jobId:Proscris.addedJobs[index].id,x:Proscris.addedJobs[index].x,y:Proscris.addedJobs[index].y},function(r){
            callback(r.motivation*100);
        });
    };
    Proscris.getJobName = function(id) {
        return JobList.getJobById(id).name;
    };
    Proscris.getJobIcon = function(silver,id,x,y) {
        var html ='<div class="centermap" onclick="GameMap.center(' + x + ',' + y + ');"style="position: absolute;background-image: url(\'../images/map/icons/instantwork.png\');width: 20px;height: 20px;top: 0;right: 3px;cursor: pointer;"></div>';
        var silverHtml = "";
        if(silver) {
             silverHtml = '<div class="featured silver"></div>';
         }
        return'<div class="job" style="left: 0; top: 0; position: relative;"><div  onclick="" class="featured"></div>' + silverHtml + html + '<img src="../images/jobs/' + JobList.getJobById(id).shortname + '.png" class="job_icon"></div>';
    };
    Proscris.getConsumableIcon = function(src) {
        return "<div><img src ="+ src + "></div>";
    };
    Proscris.checkIfSilver = function(x,y,id) {

        var key = x + "-" + y;
        var jobData = GameMap.JobHandler.Featured[key];
        if(jobData == undefined || jobData[id] == undefined) {
            return false;
        }else {
            return jobData[id].silver;
        }
    };
    Proscris.compareUniqueJobs = function(job,jobs){
        for(var i = 0 ; i < jobs.length;i++) {
            if(jobs[i].id == job.id) {
                if(job.silver && !jobs[i].silver || (job.silver == jobs[i].silver &&job.distance < jobs[i].distance)) {
                    jobs.splice(i,1);
                    jobs.push(job);
                }
                return;
            }
        }
        jobs.push(job);
    };
    Proscris.findJobData = function(job) {
        for(var i = 0 ; i < JobsModel.Jobs.length;i++) {
            if(JobsModel.Jobs[i].id == job.id) {
                return JobsModel.Jobs[i];
            }
        }
    };
    Proscris.parseJobData = function(jobs) {
        for(var job = 0 ; job < jobs.length;job++) {
            var currentJob = jobs[job];
            var data = Proscris.findJobData(currentJob);
            var xp = data.basis.short.experience;
            var money = data.basis.short.money;
            currentJob.setMotivation(data.jobmotivation*100);
            if(currentJob.silver) {
                xp = Math.ceil(1.5*xp);
                money = Math.ceil(1.5*money);
            }
            currentJob.setExperience(xp);
            currentJob.setMoney(money);
        }
    };
    Proscris.updateJobDistances = function() {
        for(var i = 0; i < Proscris.allJobs.length;i++) {
            Proscris.allJobs[i].calculateDistance();
        }
    };
    Proscris.getAllUniqueJobs = function() {
        Proscris.updateJobDistances();
        var jobs = [];
        for(var i = 0 ; i < Proscris.allJobs.length;i++) {
            var currentJob = Proscris.allJobs[i];
            if(Proscris.jobFilter.filterJob != "") {
                if(!Proscris.getJobName(currentJob.id).toLowerCase().includes(Proscris.jobFilter.filterJob)) {
                    continue;
                }
            }
            if(!JobList.getJobById(currentJob.id).canDo()) {
                continue;
            }
            if(Proscris.checkIfJobAdded(currentJob.id)) {
                continue;
            }
            var isSilver = Proscris.checkIfSilver(currentJob.x,currentJob.y,currentJob.id);
            currentJob.silver = isSilver;
            currentJob.calculateDistance();
            if(isSilver && Proscris.jobFilter.filterNoSilver) {
                continue;
            }
            if(!isSilver && Proscris.jobFilter.filterOnlySilver) {
                continue;
            }
            if(Proscris.jobFilter.filterCenterJobs && currentJob.id < 131 ) {
                continue;
            }
            Proscris.compareUniqueJobs(currentJob,jobs);
        }
        Proscris.parseJobData(jobs);

        var experienceSort = function(a,b) {
              if(a == null && b == null) {
                  return 0;
              }
              if(a == null && b != null) {
                  return 1;
              }
              if(a != null && b == null) {
                  return -1;
              }
              var a1 = a.experience;
              var b1 = b.experience;
              return (a1 > b1) ? -1 :(a1 < b1) ? 1 :0;
          };
          var reverseExperienceSort = function(a,b) {
              if(a == null && b == null) {
                  return 0;
                 }
              if(a == null && b != null) {
                  return -1;
              }
              if(a != null && b == null) {
                  return 1;
              }
              var a1 = a.experience;
              var b1 = b.experience;
              return (a1 > b1) ? 1 :(a1 < b1) ? -1 :0;
          };
        var distanceSort = function(a,b) {
              if(a == null && b == null) {
                  return 0;
              }
              if(a == null && b != null) {
                  return 1;
              }
              if(a != null && b == null) {
                  return -1;
              }
              var a1 = a.distance;
              var b1 = b.distance;
              return (a1 > b1) ? -1 :(a1 < b1) ? 1 :0;
          };
           var reverseDistanceSort = function(a,b) {
             if(a == null && b == null) {
                  return 0;
                 }
              if(a == null && b != null) {
                  return -1;
              }
              if(a != null && b == null) {
                  return 1;
              }
              var a1 = a.distance;
              var b1 = b.distance;
              return (a1 > b1) ? 1 :(a1 < b1) ? -1 :0;
          };
        if(Proscris.sortJobTableXp == 1) {
            jobs.sort(experienceSort);
        }
        if(Proscris.sortJobTableXp == -1) {
            jobs.sort(reverseExperienceSort);
        }
        if(Proscris.sortJobTableDistance == 1) {
            jobs.sort(distanceSort);
        }
        if(Proscris.sortJobTableDistance == -1) {
            jobs.sort(reverseDistanceSort);
        }
        return jobs;
    };
    Proscris.findJob = function(x,y,id) {
        for(var i = 0 ; i < Proscris.allJobs.length;i++) {
            if(Proscris.allJobs[i].id == id && Proscris.allJobs[i].x == x && Proscris.allJobs[i].y == y) {
                return Proscris.allJobs[i];
            }
        }
    };
    Proscris.addJob = function(x,y,id) {
        if(!Proscris.checkIfJobAdded(id)) {
        Proscris.addedJobs.push(Proscris.findJob(x,y,id));
        }
    };
    Proscris.removeJob = function(x,y,id) {
        for(var i = 0; i < Proscris.addedJobs.length;i++) {
            if(Proscris.addedJobs[i].id == id && Proscris.addedJobs[i].x == x && Proscris.addedJobs[i].y == y) {
                Proscris.addedJobs.splice(i,1);
                Proscris.consolidePosition(i);
                break;
            }
        }
    };
    Proscris.checkIfJobAdded = function(id) {
        for(var i = 0; i < Proscris.addedJobs.length;i++) {
            if(Proscris.addedJobs[i].id == id ) {
                return true;
            }
        }
        return false;
    };
    Proscris.findAddedJob = function(x,y,id) {
        for(var i = 0 ; i < Proscris.addedJobs.length;i++) {
            if(Proscris.addedJobs[i].x == x && Proscris.addedJobs[i].y == y && Proscris.addedJobs[i].id == id ) {
                return Proscris.addedJobs[i];
            }
        }
        return null;
    };
    Proscris.getJobSet = function(x,y,id) {
        var job = Proscris.findAddedJob(x,y,id);
        if(job != null)
            return job.set;
    };
    Proscris.setJobSet = function(x,y,id,set) {
        var job = Proscris.findAddedJob(x,y,id);
        if(job != null)
            return job.setSet(set);
    };
    Proscris.setSetForAllJobs = function() {
        for(var i = 0 ;i < Proscris.addedJobs.length;i++) {
            if(Proscris.addedJobs[i].set == -1)
            Proscris.addedJobs[i].setSet(Proscris.jobSet);
        }
    };
    Proscris.consolidePosition = function(removeIndex) {
        if(removeIndex <= Proscris.currentJob.job && Proscris.currentJob.job > 0) {
            Proscris.currentJob.job--;
        }
        if(Proscris.addedJobs.length == 1) {
            Proscris.currentJob.direction = true;
        }
    }
    Proscris.parseStopMotivation = function() {
        for(var i = 0 ; i < Proscris.addedJobs.length;i++) {
            var stopMotivation = $(".AutomatizareProscrisăwindow #x-" + Proscris.addedJobs[i].x + "y-" + Proscris.addedJobs[i].y + "id-" + Proscris.addedJobs[i].id).prop("value");
            if(Proscris.isNumber(stopMotivation)) {
                Proscris.addedJobs[i].setStopMotivation(parseInt(stopMotivation));
            }else {
                return false;
            }
        }
        return true;
    };
    Proscris.getItemImage = function(id) {
      return ItemManager.get(id).wear_image;
    };
    Proscris.findAllConsumables = function() {
        if(Proscris.searchKeys[Proscris.language] == undefined) return;
        var energyConsumes = Bag.search(Proscris.searchKeys[Proscris.language].energy);
        for(var i = 0 ; i < energyConsumes.length;i++) {
            Proscris.addConsumable(energyConsumes[i]);
        }
        var motivationConsumes = Bag.search(Proscris.searchKeys[Proscris.language].motivation);
        for(var i = 0; i < motivationConsumes.length;i++) {
          Proscris.addConsumable(motivationConsumes[i]);
        }
        var healthConsumes = Bag.search(Proscris.searchKeys[Proscris.language].health);
        for(var i = 0; i < healthConsumes.length;i++) {
            Proscris.addConsumable(healthConsumes[i]);
        }
    };
    Proscris.CheckIfConsumableAdded = function(item) {
        if(item == undefined)
            return true;
        for(var i = 0 ; i < Proscris.allConsumables.length;i++) {
            if(Proscris.allConsumables[i].id == item.obj.item_id) {
                return true;
            }
        }
        return false;
    };
    Proscris.addConsumable = function(item) {
        if(Proscris.CheckIfConsumableAdded(item)) {
            return;
        }
        var consumable = new ConsumablePrototype(item.obj.item_id,item.obj.image,item.obj.name);
        var bonuses = Proscris.parseConsumableBonuses(item.obj.usebonus);
        if(bonuses[0] == 0 && bonuses[1] == 0 && bonuses[2] == 0)
        return;
        consumable.setEnergy(bonuses[0]);
        consumable.setMotivation(bonuses[1]);
        consumable.setHealth(bonuses[2]);
        consumable.setCount(item.count);
        Proscris.allConsumables.push(consumable);
    };
    Proscris.removeConsumable = function(item) {
        var index;
        for(var i = 0 ; i < Proscris.allConsumables.length;i++) {
            if(Proscris.allConsumables[i].id == item.id) {
                index = i;
                break;
            }
        }
        if(index != undefined) {
            if(Proscris.allConsumables[index].count > 1) {
                Proscris.allConsumables[index].count--;
            }else {
                Proscris.allConsumables.slice(index,1);
            }
        }
    };
    Proscris.parseConsumableBonuses = function(bonuses) {
        var getBonus = function(text,type) {
            switch(type) {
                case 0:
                    text = text.replace(Proscris.searchKeys[Proscris.language].energyText,"");
                    break;
                case 1:
                    text = text.replace(Proscris.searchKeys[Proscris.language].motivationText,"")
                    break;
                case 2:
                    text = text.replace(Proscris.searchKeys[Proscris.language].healthText,"");
                    break;
            }
            text = text.slice(1);
            text = text.replace("%","");
            return parseInt(text);
        }
        var result = Array(3).fill(0);
        for(var i = 0 ; i < bonuses.length;i++) {
            var type = -1;
            if(bonuses[i].includes(Proscris.searchKeys[Proscris.language].energyText)) {
                type = 0;
            }else if(bonuses[i].includes(Proscris.searchKeys[Proscris.language].motivationText)) {
                type = 1;
            }else if(bonuses[i].includes(Proscris.searchKeys[Proscris.language].healthText)) {
                type = 2;
            }
            if(type !=-1)
            result[type] = getBonus(bonuses[i],type);

        }
        return result;
    };
    Proscris.filterConsumables = function(energy,motivation,health) {
        var result = [];
        for(var i = 0 ; i < Proscris.allConsumables.length;i++) {
            if(energy && Proscris.allConsumables[i].energy == 0) {
                continue;
            }
            if(motivation && Proscris.allConsumables[i].motivation == 0) {
                continue;
            }
            if(health && Proscris.allConsumables[i].health == 0) {
                continue;
            }
            result.push(Proscris.allConsumables[i]);
        }
        return result;
    };
    Proscris.changeConsumableSelection = function(id,selected) {
        for(var i = 0 ; i < Proscris.allConsumables.length;i++) {
            if(Proscris.allConsumables[i].id == id) {
                Proscris.allConsumables[i].setSelected(selected);
                break;
            }
        }
    };
    Proscris.changeSelectionAllConsumables = function(selected) {
        for(var i = 0 ; i < Proscris.allConsumables.length;i++) {
            Proscris.allConsumables[i].setSelected(selected);
        }
    };
    Proscris.canUseConsume = function(item) {
        if(BuffList.cooldowns[item.id] != undefined && BuffList.cooldowns[item.id].time > new ServerDate().getTime()) {
            return false;
        }
        return true;
    };
    Proscris.useConsumable = async function(itemToUse) {
        var item = Bag.getItemByItemId(itemToUse.id);
        item.showCooldown();
        Proscris.currentState = 2;
        Proscris.selectTab("choosenJobs");
        while(true) {
            if(Proscris.canUseConsume(itemToUse)) {
                if(Proscris.healthSet != -1) {
                    Proscris.equipSet(Proscris.healthSet);
                    await new Promise(r => setTimeout(r, Proscris.settings.setWearDelay*1000));
                }
                Proscris.removeConsumable(itemToUse);
                Proscris.consumableUsed.push(itemToUse);
                ItemUse.doIt(itemToUse.id);
                break;
            }
            await new Promise(r => setTimeout(r, 1));
        }
        while(true) {
            if(!Proscris.canUseConsume(itemToUse)) {
                $(".tw2gui_dialog_framefix").remove();
                break;
            }
            await new Promise(r => setTimeout(r, 1));
        }
        Proscris.run();
    };
    Proscris.findProperConsumable = function(motivationMissing,energyMissing,healthMissing,averageMotivationMissing,consumables) {
        var betterEnergy = function(item1,item2) {
            var distanceItem1 = Math.abs(energyMissing - item1.energy);
            var distanceItem2 = Math.abs(energyMissing - item2.energy);
            return (distanceItem1 < distanceItem2 ) ? -1 :(distanceItem1 > distanceItem2) ? 1 : 0;
        };
        var betterMotivation = function(item1,item2) {
            var distanceItem1 = Math.abs(averageMotivationMissing - item1.motivation);
            var distanceItem2 = Math.abs(averageMotivationMissing - item2.motivation);
            return (distanceItem2 < distanceItem1) ? item2 : item1;
        };
        var findMotivationConsume = function(consumes) {
            var consumeToChoose = null;
            for(var i = 0 ; i < consumes.length;i++) {
                if(consumeToChoose == null && consumes[i].motivation != 0) {
                    consumeToChoose = consumes[i];
                    continue;
                }
                if(consumeToChoose != null && consumes[i].motivation != 0) {
                    consumeToChoose = betterMotivation(consumeToChoose,consumables[i]);
                }
            }
            return consumeToChoose;
        };
        var findHealthConsume = function(consumes) {
            for(var i = 0 ; i < consumes.length;i++) {
                if(consumes[i].health != 0) {
                    return consumes[i];
                }
            }
            return null;
        };
        if(consumables.length  == 0) return null;
        var consums = consumables;
        consums = consums.sort(betterEnergy);
        if(energyMissing == 100) {
            return consums[0];
        }
        if(motivationMissing == Proscris.addedJobs.length) {
            return findMotivationConsume(consums);
        }
        if(Proscris.isHealthBelowLimit()) {
            return findHealthConsume(consums);
        }
    };
    Proscris.tryUseConsumable = function(result) {
        var healthMissing = 100 - (Character.health/Character.maxHealth) * 100;
        var energyMissing = 100 - (Character.energy/Character.maxEnergy) * 100;
        var motivationMissing = Proscris.jobsBelowMotivation(result);
        var consumables = Proscris.allConsumables;
        var averageMotivationMissing = Proscris.averageMissingMotivation(result);
        var selectedConsumes = [];
        for(var i = 0 ; i < consumables.length;i++) {
            if(consumables[i].selected)
                selectedConsumes.push(consumables[i]);
        }
        var itemToUse = Proscris.findProperConsumable(motivationMissing,energyMissing,healthMissing,averageMotivationMissing,selectedConsumes);
        if(itemToUse == null) return false;
        Proscris.useConsumable(itemToUse);
        return true;
    };
    Proscris.calculateDistances = function() {
        for(var i = 0; i < Proscris.addedJobs.length;i++) {
            Proscris.addedJobs[i].calculateDistance();
        }
    };
    Proscris.createDistanceMatrix = function() {
        var distances = new Array(Proscris.addedJobs.length);
        for(var i = 0 ; i < distances.length;i++) {
            distances[i] = new Array(Proscris.addedJobs.length);
        }
        for(var i = 0 ; i < distances.length;i++) {
            for(var j = i; j < distances[i].length;j++) {
                if(i == j) {
                    distances[i][j] = distances[j][i] = Number.MAX_SAFE_INTEGER;
                    continue;
                }
                distances[i][j] = distances[j][i] = GameMap.calcWayTime({x:Proscris.addedJobs[i].x,y:Proscris.addedJobs[i].y},{x:Proscris.addedJobs[j].x,y:Proscris.addedJobs[j].y});
            }
        }
        return distances;
    };
    Proscris.createRoute = function() {
        Proscris.currentJob = {job:0,direction:true}
        Proscris.calculateDistances();
        var closestJobIndex = 0;
        var closestDistance = Proscris.addedJobs[0].distance;
        var route = [];
        var distances = Proscris.createDistanceMatrix();
        var getClosestJob = function(index,route,distances) {
            var closestDistance = Number.MAX_SAFE_INTEGER;
            var closestIndex = -1;
            for(var i = 0 ; i < distances.length;i++) {
                if(index == i || route.includes(i)) {
                    continue;
                }
                if(distances[i][index] < closestDistance) {
                    closestDistance = distances[i][index];
                    closestIndex = i;
                }
            }
            return closestIndex;
        };
        for(var i = 1; i < Proscris.addedJobs.length;i++) {
            if(Proscris.addedJobs[i].distance < closestDistance) {
                closestDistance = Proscris.addedJobs[i].distance;
                closestJobIndex = i;
            }
        }
        route.push(closestJobIndex);
        while(route.length < Proscris.addedJobs.length) {
            var closestJob = getClosestJob(route[route.length-1],route,distances);
            route.push(closestJob);
        }
        var addedJobsOrder = [];
        for(var i = 0 ; i < route.length;i++) {
            addedJobsOrder.push(Proscris.addedJobs[route[i]]);
        }
        Proscris.addedJobs = addedJobsOrder;
        Proscris.selectTab("choosenJobs");
    };
    Proscris.equipSet = async function(set) {
        if(set == -1) return true;
        EquipManager.switchEquip(Proscris.sets[set].equip_manager_id);
        while(true) {
            let finished = await Proscris.isGearEquiped(Proscris.getSetItemArray(Proscris.sets[set]));
            if(finished) break;
            await new Promise(r => setTimeout(r, 1));
        }
        return Promise.resolve(true);
    };
    Proscris.getSetItemArray = function(set) {
        var items = [];
        if(set.head != null)
            items.push(set.head);
        if(set.neck != null)
            items.push(set.neck);
        if(set.body != null)
            items.push(set.body);
        if(set.right_arm != null)
            items.push(set.right_arm);
        if(set.left_arm != null)
            items.push(set.left_arm);
        if(set.belt != null)
            items.push(set.belt);
        if(set.foot != null)
            items.push(set.foot);
        if(set.animal != null)
            items.push(set.animal);
        if(set.yield != null)
            items.push(set.yield);
        if(set.pants != null)
            items.push(set.pants);
        return items;
    };
    Proscris.isWearing = function(itemId) {
        if(Wear.wear[ItemManager.get(itemId).type] == undefined) return false;
        return Wear.wear[ItemManager.get(itemId).type].obj.item_id == itemId;
    };
    Proscris.isGearEquiped = async function(items) {
        for(var i = 0 ; i < items.length;i++) {
            if(!Proscris.isWearing(items[i]))return false;
        }
        return true;
    }
    
   
    Proscris.checkMotivation = function(index,result,callback) {
        var check = function(index,result) {
            Proscris.loadJobMotivation(index,function(motivation) {
            result.push(motivation);
             if(index+1 < Proscris.addedJobs.length ) {
                 check(++index,result);
             }else
             if(index+1 == Proscris.addedJobs.length) {
                 callback(result);
                 return;
             }
         });
        };
        check(0,result);
    };
    Proscris.isMotivationAbove = function(result) {
        for(var i = 0 ; i < result.length;i++) {
            if(result[i] > Proscris.addedJobs[i].stopMotivation) {
                return true;
            }
        }
        return false;
    };
    Proscris.getBackToJobAfterMotivationStop = function() {

    };
    Proscris.jobsBelowMotivation = function(result) {
        var count = 0;
        for(var i = 0 ; i < result.length;i++) {
            if(result[i] <= Proscris.addedJobs[i].stopMotivation) {
                count++;
            }
        }
        return count;
    };
    Proscris.averageMissingMotivation = function(result) {
        var motivation = 0;
        for(var i = 0 ; i < result.length;i++) {
            motivation += (100-result[i]);
        }
        return motivation/result.length;
    };
    Proscris.isHealthBelowLimit = function() {
        if(Proscris.settings.healthStop >= ((Character.health/Character.maxHealth) * 100)) {
            return true;
        }
        return false;
    };
    Proscris.isStopMotivationZero = function() {
        for(var i = 0 ; i < Proscris.addedJobs.length;i++) {
            if(Proscris.addedJobs[i].stopMotivation == 0) {
                return true;
            }
        }
        return false;
    };
    Proscris.canAddMissing = function(result) {
        if(!Proscris.settings.addMotivation && Proscris.jobsBelowMotivation(result) && !Proscris.isStopMotivationZero()) {
            alert("Can't continue because of motivation");
            return false;
        }
        if(!Proscris.settings.addEnergy && Character.energy == 0) {
            alert("Can't continue because of energy");
            return false;
        }
        if(!Proscris.settings.addHealth && Proscris.isHealthBelowLimit()) {
            alert("Can't continue because of health");
            return false;
        }
        return true;
    };
    Proscris.finishRun = function() {
        Proscris.currentState = 0;
        Proscris.isRunning = false;
        Proscris.selectTab("choosenJobs");
        alert("Finished");
    };
    Proscris.updateStatistics = function(oldXp) {
        var xpDifference = Character.experience - oldXp;
        Proscris.statistics.xpInSession += xpDifference;
        Proscris.statistics.totalXp += xpDifference;
    }
    Proscris.run = function() {
        Proscris.checkMotivation(0,[],function(result) {
            if((Proscris.isMotivationAbove(result) || Proscris.isStopMotivationZero()) && Character.energy > 0 && !Proscris.isHealthBelowLimit()){
                Proscris.currentState = 1;
                Proscris.selectTab("choosenJobs");
                Proscris.prepareJobRun(Proscris.currentJob.job);
            }else {
                if(!Proscris.canAddMissing(result)) {
                    Proscris.finishRun();
                }else {
                    var answer = Proscris.tryUseConsumable(result);
                    if(!answer) {
                        Proscris.finishRun();
                    }
                }
            }
        });
    };
    Proscris.prepareJobRun = function(index) {
        setTimeout(function() {
            Proscris.loadJobMotivation(index,async function(motivation) {
                if(Character.energy == 0 || Proscris.isHealthBelowLimit()) {
                    Proscris.run();
                }
                else if(motivation <= Proscris.addedJobs[index].stopMotivation && Proscris.addedJobs[index].stopMotivation > 0) {
                    Proscris.checkMotivation(0,[],function(result) {
                        if(Proscris.isMotivationAbove(result)) {
                            Proscris.changeJob();
                        }else {
                            Proscris.run();
                        }
                    });
                }else
                if(GameMap.calcWayTime(Character.position,{x:Proscris.addedJobs[index].x,y:Proscris.addedJobs[index].y}) == 0) {
                    var maxJobs;
                    (Premium.hasBonus('automation')) ? maxJobs = 9 : maxJobs = 4;
                    if(Proscris.addedJobs[index].stopMotivation != 0){
                    var numberOfJobs = Math.min(Math.min(motivation - Proscris.addedJobs[index].stopMotivation,Character.energy),maxJobs);
                    }else {
                        var numberOfJobs = Math.min(Character.energy,maxJobs);
                    }
                    Proscris.runJob(index,numberOfJobs);
                }else {
                    var equiped = await Proscris.equipSet(Proscris.travelSet);
                    Proscris.walkToJob(index);
                }
            });
        },Proscris.generateRandomNumber(Proscris.settings.jobDelayMin,Proscris.settings.jobDelayMax)*1000);
    };
    Proscris.walkToJob = async function(index) {
        JobWindow.startJob(Proscris.addedJobs[index].id,Proscris.addedJobs[index].x,Proscris.addedJobs[index].y,15);
        while(true) {
            if(GameMap.calcWayTime(Character.position,{x:Proscris.addedJobs[index].x,y:Proscris.addedJobs[index].y}) == 0) {
                break;
            }
            if(!Proscris.isRunning) {
                break;
            }
            await new Promise(r => setTimeout(r, 1));
        }
        Proscris.cancelJobs();
        if(Proscris.isRunning)
        Proscris.prepareJobRun(index);
    };
    Proscris.sleep = async function() {
        if(Proscris.settings.enableRegeneration && Proscris.selectedSleepPlace != -2) {
            //if sleep place is town
            if(Proscris.selectedSleepPlace == -1) {
                TaskQueue.add(new TaskWalk(Proscris.homeTown.town_id,'town'));
            }else {
                TaskQueue.add(new TaskWalk(Proscris.forts[Proscris.selectedSleepPlace].fort_id,'fort'));
            }

            while(true) {
            if(GameMap.calcWayTime(Character.position,{x:Proscris.addedJobs[index].x,y:Proscris.addedJobs[index].y}) == 0) {
                break;
            }
            if(!Proscris.isRunning) {
                break;
            }
            await new Promise(r => setTimeout(r, 1));
        }
        }

    }
    Proscris.changeJob = function() {
        (Proscris.currentJob.direction) ? Proscris.currentJob.job++ : Proscris.currentJob.job--;
        if(Proscris.currentJob.job == Proscris.addedJobs.length) {
            Proscris.currentJob.job--;
            Proscris.currentJob.direction = false;
        } else if(Proscris.currentJob.job < 0) {
            Proscris.currentJob.job++;
            Proscris.currentJob.direction = true;
        }
        Proscris.setCookies();
        Proscris.run();
    };
    Proscris.runJob = async function(jobIndex,jobCount) {
        Proscris.statistics.jobsInSession += jobCount;
        Proscris.statistics.totalJobs += jobCount;
        var oldXp = Character.experience;
        for(var i = 0; i < jobCount;i++) {
            JobWindow.startJob(Proscris.addedJobs[jobIndex].id,Proscris.addedJobs[jobIndex].x,Proscris.addedJobs[jobIndex].y,15);
        }
        await new Promise(r => setTimeout(r, Proscris.settings.setWearDelay * 1000));
        Proscris.equipSet(Proscris.addedJobs[jobIndex].set);
        while(true) {
            if(TaskQueue.queue.length == 0) {
                Proscris.updateStatistics(oldXp);
                Proscris.setCookies();
                Proscris.prepareJobRun(jobIndex);
                return;
            }
            if(!Proscris.isRunning || Proscris.isHealthBelowLimit()) {
                break;
            }
            await new Promise(r => setTimeout(r, 1));
        }
        Proscris.statistics.jobsInSession -= TaskQueue.queue.length;
        Proscris.statistics.totalJobs -= TaskQueue.queue.length;
        Proscris.updateStatistics(oldXp);
        Proscris.setCookies();
        Proscris.cancelJobs();

    };
    Proscris.cancelJobs = function() {
        if(TaskQueue.queue.length > 0)
            TaskQueue.cancelAll();
    };
    Proscris.setCookies = function() {
        var expiracyDateTemporary = new Date();
        var hour = expiracyDateTemporary.getHours();
        expiracyDateTemporary.setHours(2,0,0);
        if(hour > 2)
            expiracyDateTemporary.setDate(expiracyDateTemporary.getDate() + 1);
        var temporaryObject ={
            addedJobs:Proscris.addedJobs,
            travelSet:Proscris.travelSet,
            jobSet:Proscris.jobSet,
            healthSet:Proscris.healthSet,
            currentJob:Proscris.currentJob
        };
        var expiracyDatePernament = new Date();
        expiracyDatePernament.setDate(expiracyDatePernament.getDate() + 360000);
        var pernamentObject = {
            settings:Proscris.settings,
            totalJobs:Proscris.statistics.totalJobs,
            totalXp:Proscris.statistics.totalXp
        };
        var jsonTemporary = JSON.stringify(temporaryObject);
        var jsonPernament = JSON.stringify(pernamentObject);
        document.cookie = "AutomatizareProscrisătemporary=" + jsonTemporary + ";expires=" + expiracyDateTemporary.toGMTString() + ";";
        document.cookie = "AutomatizareProscrisăpernament=" + jsonPernament + ";expires=" + expiracyDatePernament.toGMTString() + ";";
    };
    Proscris.getCookies = function() {
        var cookie = document.cookie.split("=");
        for(var i = 0; i < cookie.length;i++) {
            if(cookie[i].includes("AutomatizareProscrisătemporary")) {
                var obj = cookie[i+1].split(";");
                var tempObject = JSON.parse(obj[0]);
                var tmpAddedJobs = tempObject.addedJobs;
                for(var j = 0 ; j < tmpAddedJobs.length;j++) {
                    var jobP = new JobPrototype(tmpAddedJobs[j].x,tmpAddedJobs[j].y,tmpAddedJobs[j].id);
                    jobP.setSilver(tmpAddedJobs[j].silver);
                    jobP.distance = tmpAddedJobs[j].distance;
                    jobP.setExperience(tmpAddedJobs[j].experience);
                    jobP.setMoney(tmpAddedJobs[j].money);
                    jobP.setMotivation(tmpAddedJobs[j].motivation);
                    jobP.setStopMotivation(tmpAddedJobs[j].stopMotivation);
                    jobP.setSet(tmpAddedJobs[j].set);
                    Proscris.addedJobs.push(jobP);
                }
                Proscris.travelSet = tempObject.travelSet;
                Proscris.jobSet = tempObject.jobSet;
                Proscris.healthSet = tempObject.healthSet;
                Proscris.currentJob = tempObject.currentJob;
                Proscris.setSetForAllJobs();
            }
            if(cookie[i].includes("AutomatizareProscrisăpernament")) {
                var obj = cookie[i+1].split(";");
                var pernamentObject = JSON.parse(obj[0]);
                Proscris.settings = pernamentObject.settings;
                Proscris.statistics.totalJobs = pernamentObject.totalJobs;
                Proscris.statistics.totalXp = pernamentObject.totalXp;
            }
        }
    };
    Proscris.createWindow = function() {
        var window = wman.open("Proscris").setResizeable(false).setMinSize(650, 480).setSize(650, 480).setMiniTitle("AutomatizareProscrisă");
        var content = $('<div class=\'AutomatizareProscrisăwindow\'/>');
        var tabs = {
            "jobs":"Jobs",
            "choosenJobs":"Choosen jobs",
            "sets":"Sets",
            "consumables":"Consumables",
            "stats":"Statistics",
            "settings":"Settings"
        };
        var tabLogic = function(win,id) {
            var content = $('<div class=\'AutomatizareProscrisăwindow\'/>');
            switch(id) {
                case "jobs":
                    Proscris.loadJobData(function(){
                    Proscris.removeActiveTab(this);
                    Proscris.removeWindowContent();
                    Proscris.addActiveTab("jobs",this);
                    content.append(Proscris.createJobsTab());
                    Proscris.window.appendToContentPane(content);
                    Proscris.addJobTableCss();
                    $(".AutomatizareProscrisăwindow .tw2gui_scrollpane_clipper_contentpane").css({"top":Proscris.jobTablePosition.content});
                    $(".AutomatizareProscrisăwindow .tw2gui_scrollbar_pulley").css({"top":Proscris.jobTablePosition.scrollbar});
                    Proscris.addEventsHeader();
                    });
                    break;
                case "choosenJobs":
                    Proscris.removeActiveTab(this);
                    Proscris.removeWindowContent();
                    Proscris.addActiveTab("choosenJobs",this);
                    content.append(Proscris.createAddedJobsTab());
                    Proscris.window.appendToContentPane(content);
                    $(".AutomatizareProscrisăwindow .tw2gui_scrollpane_clipper_contentpane").css({"top":Proscris.addedJobTablePosition.content});
                    $(".AutomatizareProscrisăwindow .tw2gui_scrollbar_pulley").css({"top":Proscris.addedJobTablePosition.scrollbar});
                    Proscris.addAddedJobsTableCss();
                    break;
                case "consumables":
                    Proscris.removeActiveTab(this);
                    Proscris.removeWindowContent();
                    Proscris.addActiveTab("consumables",this);
                    Proscris.findAllConsumables();
                    content.append(Proscris.createConsumablesTable());
                    Proscris.window.appendToContentPane(content);
                    $(".AutomatizareProscrisăwindow .tw2gui_scrollpane_clipper_contentpane").css({"top":Proscris.consumableTablePosition.content});
                    $(".AutomatizareProscrisăwindow .tw2gui_scrollbar_pulley").css({"top":Proscris.consumableTablePosition.scrollbar});
                    Proscris.addConsumableTableCss();
                    break;
                case "sets":
                    Proscris.loadSets(function() {
                        Proscris.removeActiveTab(this);
                        Proscris.removeWindowContent();
                        Proscris.addActiveTab("sets",this);
                        content.append(Proscris.createSetGui())
                        Proscris.window.appendToContentPane(content);
                    });
                    break;
                case "stats":
                    Proscris.removeActiveTab(this);
                    Proscris.removeWindowContent();
                    Proscris.addActiveTab("stats",this);
                    content.append(Proscris.createStatisticsGui());
                    Proscris.window.appendToContentPane(content);
                    break;
                case "settings":
                    Proscris.removeActiveTab(this);
                    Proscris.removeWindowContent();
                    Proscris.addActiveTab("settings",this);
                    content.append(Proscris.createSettingsGui());
                    Proscris.window.appendToContentPane(content);
                    break;
            }
        }
        for(var tab in tabs) {
            window.addTab(tabs[tab],tab,tabLogic);
        }
        Proscris.window = window;
        Proscris.selectTab("jobs");
    };
    Proscris.selectTab = function(key) {
        Proscris.window.tabIds[key].f(Proscris.window,key);
    };
    Proscris.removeActiveTab = function(window) {
        $('div.tw2gui_window_tab', window.divMain).removeClass('tw2gui_window_tab_active');
    };
    Proscris.addActiveTab = function(key,window) {
        $('div._tab_id_' + key, window.divMain).addClass('tw2gui_window_tab_active');
    };
    Proscris.removeWindowContent = function() {
        $(".AutomatizareProscrisăwindow").remove();
    };
    Proscris.addJobTableCss = function() {
        $(".AutomatizareProscrisăwindow .jobIcon").css({"width":"80px"});
        $(".AutomatizareProscrisăwindow .jobName").css({"width":"150px"});
        $(".AutomatizareProscrisăwindow .jobXp").css({"width":"40px"});
        $(".AutomatizareProscrisăwindow .jobMoney").css({"width":"40px"});
        $(".AutomatizareProscrisăwindow .jobMotivation").css({"width":"40px"});
        $(".AutomatizareProscrisăwindow .jobDistance").css({"width":"100px"});
        $(".AutomatizareProscrisăwindow .row").css({"height":"60px"});
        $('.AutomatizareProscrisăwindow').find('.tw2gui_scrollpane').css('height', '250px');
    };
    Proscris.addAddedJobsTableCss = function() {
        $(".AutomatizareProscrisăwindow .jobIcon").css({"width":"80px"});
        $(".AutomatizareProscrisăwindow .jobName").css({"width":"130px"});
        $(".AutomatizareProscrisăwindow .jobStopMotivation").css({"width":"110px"});
        $(".AutomatizareProscrisăwindow .jobRemove").css({"width":"105px"});
        $(".AutomatizareProscrisăwindow .jobSet").css({"width":"100px"});
        $(".AutomatizareProscrisăwindow .row").css({"height":"60px"});
        $('.AutomatizareProscrisăwindow').find('.tw2gui_scrollpane').css('height', '250px');
    };
    Proscris.addConsumableTableCss = function() {
        $(".AutomatizareProscrisăwindow .consumIcon").css({"width":"80px"});
        $(".AutomatizareProscrisăwindow .consumName").css({"width":"120px"});
        $(".AutomatizareProscrisăwindow .consumCount").css({"width":"70px"});
        $(".AutomatizareProscrisăwindow .consumEnergy").css({"width":"70px"});
        $(".AutomatizareProscrisăwindow .consumMotivation").css({"width":"70px"});
        $(".AutomatizareProscrisăwindow .consumHealth").css({"width":"70px"});
        $(".AutomatizareProscrisăwindow .row").css({"height":"80px"});
        $('.AutomatizareProscrisăwindow').find('.tw2gui_scrollpane').css('height', '250px');
    };
    Proscris.addEventsHeader = function() {
        $(".AutomatizareProscrisăwindow .jobXp").click(function() {
            if(Proscris.sortJobTableXp == 0) {
                Proscris.sortJobTableXp = 1;
            }else {
                (Proscris.sortJobTableXp == 1) ? Proscris.sortJobTableXp = -1 : Proscris.sortJobTableXp = 1;
            }
            Proscris.sortJobTableDistance = 0;
            Proscris.selectTab("jobs");
        });
        $(".AutomatizareProscrisăwindow .jobDistance").click(function() {
            if(Proscris.sortJobTableDistance == 0) {
                Proscris.sortJobTableDistance = 1;
            }else {
                (Proscris.sortJobTableDistance == 1) ? Proscris.sortJobTableDistance = -1 : Proscris.sortJobTableDistance = 1;
            }
            Proscris.sortJobTableXp = 0;
            Proscris.selectTab("jobs");
        });
    };
    Proscris.createJobsTab = function() {
        var htmlSkel = $("<div id = \'jobs_overview'\></div>");
        var html = $("<div class = \'jobs_search'\ style=\'position:relative;'\><div id=\'jobFilter'\style=\'position:absolute;top:10px;left:15px'\></div><div id=\'job_only_silver'\style=\'position:absolute;top:10px;left:200px;'\></div><div id=\'job_no_silver'\style=\'position:absolute;top:10px;left:270px;'\></div><div id=\'job_center'\style=\'position:absolute;top:10px;left:350px;'\></div><div id=\'button_filter_jobs'\style=\'position:absolute;top:5px;left:450px;'\></div></div>");
        var table = new west.gui.Table();
        var xpIcon = '<img src="/images/icons/star.png">';
        var dollarIcon = '<img src="/images/icons/dollar.png">';
        var motivationIcon = '<img src="/images/icons/motivation.png">';
        var arrow_desc = '&nbsp;<img src="../images/window/jobs/sortarrow_desc.png"/>';
        var arrow_asc = '&nbsp;<img src="../images/window/jobs/sortarrow_asc.png"/>';
        var uniqueJobs = Proscris.getAllUniqueJobs();
        table.addColumn("jobIcon","jobIcon").addColumn("jobName","jobName").addColumn("jobXp","jobXp").addColumn("jobMoney","jobMoney").addColumn("jobMotivation","jobMotivation").addColumn("jobDistance","jobDistance").addColumn("jobAdd","jobAdd");
        table.appendToCell("head","jobIcon","Job icon").appendToCell("head","jobName","Job name").appendToCell("head","jobXp",xpIcon + (Proscris.sortJobTableXp == 1 ? arrow_asc : Proscris.sortJobTableXp == -1 ? arrow_desc : "")).appendToCell("head","jobMoney",dollarIcon).appendToCell("head","jobMotivation",motivationIcon).appendToCell("head","jobDistance","Distance " + (Proscris.sortJobTableDistance == 1 ? arrow_asc : Proscris.sortJobTableDistance == -1 ? arrow_desc : "")).appendToCell("head","jobAdd","");
        for(var job = 0 ; job < uniqueJobs.length;job++) {
            table.appendRow().appendToCell(-1,"jobIcon",Proscris.getJobIcon(uniqueJobs[job].silver,uniqueJobs[job].id,uniqueJobs[job].x,uniqueJobs[job].y)).appendToCell(-1,"jobName",Proscris.getJobName(uniqueJobs[job].id)).appendToCell(-1,"jobXp",uniqueJobs[job].experience).appendToCell(-1,"jobMoney",uniqueJobs[job].money).appendToCell(-1,"jobMotivation",uniqueJobs[job].motivation).appendToCell(-1,"jobDistance",uniqueJobs[job].distance.formatDuration()).appendToCell(-1,"jobAdd",Proscris.createAddJobButton(uniqueJobs[job].x,uniqueJobs[job].y,uniqueJobs[job].id));
        }
        var textfield = new west.gui.Textfield("jobsearch").setPlaceholder("Select job name");
        if(Proscris.jobFilter.filterJob != "") {
            textfield.setValue(Proscris.jobFilter.filterJob);
        }
        var checkboxOnlySilver = new west.gui.Checkbox();
        checkboxOnlySilver.setLabel("Silvers");
        checkboxOnlySilver.setSelected(Proscris.jobFilter.filterOnlySilver);
        checkboxOnlySilver.setCallback(function() {
            if(this.isSelected()) {
                Proscris.jobFilter.filterOnlySilver = true;
              }else {
                Proscris.jobFilter.filterOnlySilver = false;
              }
        });
        var checkboxNoSilver = new west.gui.Checkbox();
        checkboxNoSilver.setLabel("No silvers");
        checkboxNoSilver.setSelected(Proscris.jobFilter.filterNoSilver);
        checkboxNoSilver.setCallback(function() {
            if(this.isSelected()) {
                Proscris.jobFilter.filterNoSilver = true;
              }else {
                Proscris.jobFilter.filterNoSilver = false;
              }
        });
        var checkboxCenterJobs = new west.gui.Checkbox();
        checkboxCenterJobs.setLabel("Center jobs");
        checkboxCenterJobs.setSelected(Proscris.jobFilter.filterCenterJobs);
        checkboxCenterJobs.setCallback(function() {
            if(this.isSelected()) {
                Proscris.jobFilter.filterCenterJobs = true;
              }else {
                Proscris.jobFilter.filterCenterJobs = false;
              }
        });
        var buttonFilter = new west.gui.Button("Filter",function() {
            Proscris.jobFilter.filterJob = textfield.getValue();
            Proscris.jobTablePosition.content = "0px";
            Proscris.jobTablePosition.scrollbar = "0px";
            Proscris.selectTab("jobs");
        });
        htmlSkel.append(table.getMainDiv());
        $('#jobFilter', html).append(textfield.getMainDiv());
        $("#job_only_silver",html).append(checkboxOnlySilver.getMainDiv());
        $("#job_no_silver",html).append(checkboxNoSilver.getMainDiv());
        $("#job_center",html).append(checkboxCenterJobs.getMainDiv());
        $("#button_filter_jobs",html).append(buttonFilter.getMainDiv());
        htmlSkel.append(html);
        return htmlSkel;
    };
    Proscris.createAddJobButton = function(x,y,id) {
        var buttonAdd = new west.gui.Button("Add new job",function() {
            Proscris.addJob(x,y,id);
            Proscris.jobTablePosition.content = $(".AutomatizareProscrisăwindow .tw2gui_scrollpane_clipper_contentpane").css("top");
            Proscris.jobTablePosition.scrollbar = $(".AutomatizareProscrisăwindow .tw2gui_scrollbar_pulley").css("top");
            Proscris.selectTab("jobs");
        });
        buttonAdd.setWidth(100);
        return buttonAdd.getMainDiv();
    };
    Proscris.createAddedJobsTab = function() {
        var htmlSkel = $("<div id=\'added_jobs_overview'\></div>");
        var footerHtml = $("<div id=\'start_AutomatizareProscrisă'\ style=\'position:relative;'\><span class =\'Proscris_state'\ style=\' position:absolute;left:20px; top:10px; font-family: Arial, Helvetica, sans-serif; font-size: 15px;font-weight: bold;'\> Current state:"+ Proscris.states[Proscris.currentState] +"</span><div class = \'Proscris_run'\ style = \'position:absolute; left:350px; top:20px;'\></div></div>");
        var table = new west.gui.Table();
        table.addColumn("jobIcon","jobIcon").addColumn("jobName","jobName").addColumn("jobStopMotivation","jobStopMotivation").addColumn("jobSet","jobSet").addColumn("jobRemove","jobRemove");
        table.appendToCell("head","jobIcon","Job icon").appendToCell("head","jobName","Job name").appendToCell("head","jobStopMotivation","Stop motivation").appendToCell("head","jobSet","Job set").appendToCell("head","jobRemove","");
        for(var job = 0; job < Proscris.addedJobs.length;job++) {
            table.appendRow().appendToCell(-1,"jobIcon",Proscris.getJobIcon(Proscris.addedJobs[job].silver,Proscris.addedJobs[job].id,Proscris.addedJobs[job].x,Proscris.addedJobs[job].y)).appendToCell(-1,"jobName",Proscris.getJobName(Proscris.addedJobs[job].id)).appendToCell(-1,"jobStopMotivation",Proscris.createMinMotivationTextfield(Proscris.addedJobs[job].x,Proscris.addedJobs[job].y,Proscris.addedJobs[job].id,Proscris.addedJobs[job].stopMotivation)).appendToCell(-1,"jobSet",Proscris.createComboxJobSets(Proscris.addedJobs[job].x,Proscris.addedJobs[job].y,Proscris.addedJobs[job].id)).appendToCell(-1,"jobRemove",Proscris.createRemoveJobButton(Proscris.addedJobs[job].x,Proscris.addedJobs[job].y,Proscris.addedJobs[job].id));
        }
        var buttonStart = new west.gui.Button("Start",function() {
            var parseSuccesfull = Proscris.parseStopMotivation();
            if(parseSuccesfull) {
                Proscris.createRoute();
                Proscris.isRunning = true;
                Proscris.setCookies();
                Proscris.run();
            }else {
                new UserMessage("Wrong format of set stop motivation", UserMessage.TYPE_ERROR).show();
            }
        });
        var buttonStop = new west.gui.Button("Stop",function() {
            Proscris.isRunning = false;
            Proscris.currentState = 0;
            Proscris.selectTab("choosenJobs");
        });
        htmlSkel.append(table.getMainDiv());
        $(".Proscris_run",footerHtml).append(buttonStart.getMainDiv());
        $(".Proscris_run",footerHtml).append(buttonStop.getMainDiv());
        htmlSkel.append(footerHtml);
        return htmlSkel;
    };
    Proscris.createMinMotivationTextfield = function(x,y,id,placeholder) {
        var componentId = "x-" + x + "y-" +y + "id-" + id;
        var textfield = new west.gui.Textfield();
        textfield.setId(componentId);
        textfield.setWidth(40);
        textfield.setValue(placeholder);
        return textfield.getMainDiv();
    };
    Proscris.createRemoveJobButton = function(x,y,id) {
        var buttonRemove = new west.gui.Button("Remove job",function() {
            Proscris.removeJob(x,y,id);
            Proscris.addedJobTablePosition.content = $(".AutomatizareProscrisăwindow .tw2gui_scrollpane_clipper_contentpane").css("top");
            Proscris.addedJobTablePosition.scrollbar = $(".AutomatizareProscrisăwindow .tw2gui_scrollbar_pulley").css("top");
            Proscris.selectTab("choosenJobs");
        });
        buttonRemove.setWidth(100);
        return buttonRemove.getMainDiv();
    };
    Proscris.createComboxJobSets = function(x,y,id) {
        var combobox = new west.gui.Combobox();
        Proscris.addComboboxItems(combobox);
        combobox = combobox.select(Proscris.getJobSet(x,y,id));
        combobox.setWidth(60);
        combobox.addListener(function(value) {
            Proscris.setJobSet(x,y,id,value);;
            Proscris.selectTab("choosenJobs");
        });
        return combobox.getMainDiv();
    };
    Proscris.addComboboxItems = function(combobox) {
        combobox.addItem(-1,"None");
        for(var i = 0 ; i < Proscris.sets.length;i++) {
            combobox.addItem(i.toString(),Proscris.sets[i].name);
        }
    };
    Proscris.createSetGui = function() {
        if(Proscris.sets.length == 0) {
            return $("<span style=\'font-size:20px'\>No sets available</span>");
        }
        var htmlSkel = $("<div id =\'AutomatizareProscrisă_sets_window'\ style=\'display:block;position:relative;width:650px;height:430px;'\><div id=\'AutomatizareProscrisă_sets_left' style=\'display:block;position:absolute;width:250px;height:430px;top:0px;left:0px'\></div><div id=\'AutomatizareProscrisă_sets_right' style=\'display:block;position:absolute;width:300px;height:410px;top:0px;left:325px'\></div></div>");
        var combobox = new west.gui.Combobox("combobox_sets");
        Proscris.addComboboxItems(combobox);
        combobox = combobox.select(Proscris.selectedSet);
        combobox.addListener(function(value) {
            Proscris.selectedSet = value;
            Proscris.selectTab("sets");
        });
        var buttonSelectTravelSet = new west.gui.Button("Select travel set",function() {
            Proscris.travelSet = Proscris.selectedSet;
            Proscris.selectTab("sets");
        });
        var buttonSelectJobSet = new west.gui.Button("Select job set",function() {
            Proscris.jobSet = Proscris.selectedSet;
            Proscris.setSetForAllJobs();
            Proscris.selectTab("sets");
        });
        var buttonSelectHealthSet = new west.gui.Button("Select health set",function() {
            Proscris.healthSet = Proscris.selectedSet;
            Proscris.selectTab("sets");
        });
        var buttonSelectRegenerationSet = new west.gui.Button("Select regeneration set",function() {
            Proscris.regenerationSet = Proscris.selectedSet;
            Proscris.selectTab("sets");
        });
        var travelSetText = "None";
        if(Proscris.travelSet != -1) {
            travelSetText = Proscris.sets[Proscris.travelSet].name;
        }
        var jobSetText = "None";
        if(Proscris.jobSet != -1) {
            jobSetText = Proscris.sets[Proscris.jobSet].name;
        }
        var healthSetText = "None";
        if(Proscris.healthSet != -1) {
            healthSetText = Proscris.sets[Proscris.healthSet].name;
        }
        var regenerationSetText = "None";
        if(Proscris.regenerationSet != -1) {
            regenerationSetText = Proscris.sets[Proscris.regenerationSet].name;
        }
        var left = $("<div></div>").append(new west.gui.Groupframe().appendToContentPane($("<span>Sets</span><br><br>")).appendToContentPane(combobox.getMainDiv()).appendToContentPane($("<br><br><span>Travel set:"+ travelSetText +"</span><br><br>")).appendToContentPane(buttonSelectTravelSet.getMainDiv()).appendToContentPane($("<br><br><span>Job set:"+ jobSetText +"</span><br><br>")).appendToContentPane(buttonSelectJobSet.getMainDiv()).appendToContentPane($("<br><br><span>Health set:"+ healthSetText +"</span><br><br>")).appendToContentPane(buttonSelectHealthSet.getMainDiv()).appendToContentPane($("<br><br><span>Regeneration set:"+ regenerationSetText +"</span><br><br>")).appendToContentPane(buttonSelectRegenerationSet.getMainDiv()).getMainDiv());
        var right = $("<div style=\'display:block;position:relative;width:300px;height:410px;'\></div>");
        //head div
        right.append("<div class=\'wear_head wear_slot'\ style=\'display:block;position:absolute;left:30px;top:1px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position: -95px 0;'\></div>");
        //chest div
        right.append("<div class=\'wear_body wear_slot'\ style=\'display:block;position:absolute;left:30px;top:106px;width:95px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //pants div
        right.append("<div class=\'wear_pants wear_slot'\ style=\'display:block;position:absolute;left:30px;top:258px;width:93px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //neck div
        right.append("<div class=\'wear_neck wear_slot'\ style=\'display:block;position:absolute;left:-47px;top:1px;width:74px;height:74px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-189px 0;'\></div>");
        //right arm div
        right.append("<div class=\'wear_right_arm wear_slot'\ style=\'display:block;position:absolute;left:-64px;top:79px;width:95px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //animal div
        right.append("<div class=\'wear_animal wear_slot'\ style=\'display:block;position:absolute;left:-64px;top:223px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-95px 0;'\></div>");
        //yield div
        right.append("<div class=\'wear_yield wear_slot'\ style=\'display:block;position:absolute;left:-47px;top:321px;width:74px;height:74px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-189px 0;'\></div>");
        //left arm div
        right.append("<div class=\'wear_left_arm wear_slot'\ style=\'display:block;position:absolute;left:127px;top:52px;width:95px;height:138px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:0 0;'\></div>");
        //belt div
        right.append("<div class=\'wear_belt wear_slot'\ style=\'display:block;position:absolute;left:127px;top:200px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-95px 0;'\></div>");
        //boots div
        right.append("<div class=\'wear_foot wear_slot'\ style=\'display:block;position:absolute;left:127px;top:302px;width:93px;height:94px;background:url(https://westzz.innogamescdn.com/images/window/wear/bg_sprite.png) 0 0 no-repeat;background-position:-95px 0;'\></div>");
        var keys = ["head","body","pants","neck","right_arm","animal","yield","left_arm","belt","foot"];
        if(Proscris.selectedSet != -1)
        Proscris.insertSetImages(right,keys);
        $("#AutomatizareProscrisă_sets_left",htmlSkel).append(left);
        $("#AutomatizareProscrisă_sets_right",htmlSkel).append(right);
        return htmlSkel;
    };
    Proscris.getImageSkel = function() {
        return $("<img src=\''\>");
    };
    Proscris.insertSetImages = function(html,keys) {
        for(var i = 0 ; i < keys.length;i++) {
            if(Proscris.sets[Proscris.selectedSet][keys[i]] != null) {
            $(".wear_"+keys[i],html).append(Proscris.getImageSkel().attr("src",Proscris.getItemImage(Proscris.sets[Proscris.selectedSet][keys[i]])));
            }
        }
        return html;
    };
    Proscris.createConsumablesTable = function() {
        var htmlSkel = $("<div id=\'consumables_overview'\></div>");
        var html = $("<div class = \'consumables_filter'\ style=\'position:relative;'\><div id=\'energy_consumables'\style=\'position:absolute;top:10px;left:15px;'\></div><div id=\'motivation_consumables'\style=\'position:absolute;top:10px;left:160px;'\></div><div id=\'health_consumables'\style=\'position:absolute;top:10px;left:320px;'\></div><div id=\'button_filter_consumables'\style=\'position:absolute;top:5px;left:460px;'\></div></div>");
        var table = new west.gui.Table();
        var consumableList = Proscris.filterConsumables(Proscris.consumableSelection.energy,Proscris.consumableSelection.motivation,Proscris.consumableSelection.health);
        table.addColumn("consumIcon","consumIcon").addColumn("consumName","consumName").addColumn("consumCount","consumCount").addColumn("consumEnergy","consumEnergy").addColumn("consumMotivation","consumMotivation").addColumn("consumHealth","consumHealth").addColumn("consumSelected","consumSelected");
        table.appendToCell("head","consumIcon","Image").appendToCell("head","consumName","Name").appendToCell("head","consumCount","Count").appendToCell("head","consumEnergy","Energy").appendToCell("head","consumMotivation","Motivation").appendToCell("head","consumHealth","Health").appendToCell("head","consumSelected","Use");
        for(var i = 0 ; i < consumableList.length;i++ ) {
            var checkbox = new west.gui.Checkbox();
            checkbox.setSelected(consumableList[i].selected);
            checkbox.setId(consumableList[i].id);
            checkbox.setCallback(function() {
                Proscris.changeConsumableSelection(parseInt(this.divMain.attr("id")),this.isSelected());
                Proscris.consumableTablePosition.content = $(".AutomatizareProscrisăwindow .tw2gui_scrollpane_clipper_contentpane").css("top");;
                Proscris.consumableTablePosition.scrollbar = $(".AutomatizareProscrisăwindow .tw2gui_scrollbar_pulley").css("top");
                Proscris.selectTab("consumables");
                Proscris.setCookies();
            });
            table.appendRow().appendToCell(-1,"consumIcon",Proscris.getConsumableIcon(consumableList[i].image)).appendToCell(-1,"consumName",consumableList[i].name).appendToCell(-1,"consumCount",consumableList[i].count).appendToCell(-1,"consumEnergy",consumableList[i].energy).appendToCell(-1,"consumMotivation",consumableList[i].motivation).appendToCell(-1,"consumHealth",consumableList[i].health).appendToCell(-1,"consumSelected",checkbox.getMainDiv());
        }
        var buttonSelect = new west.gui.Button("Select all",function() {
            Proscris.changeSelectionAllConsumables(true);
            Proscris.selectTab("consumables");
            Proscris.setCookies();
        });
        var buttonDeselect = new west.gui.Button("Deselect all",function() {
            Proscris.changeSelectionAllConsumables(false);
            Proscris.selectTab("consumables");
            Proscris.setCookies();
        });
        table.appendToFooter("consumEnergy",buttonSelect.getMainDiv());
        table.appendToFooter("consumHealth",buttonDeselect.getMainDiv());
        htmlSkel.append(table.getMainDiv());
        var checkboxEnergyConsumes = new west.gui.Checkbox();
        checkboxEnergyConsumes.setLabel("Energy consumables");
        checkboxEnergyConsumes.setSelected(Proscris.consumableSelection.energy);
        checkboxEnergyConsumes.setCallback(function() {
            Proscris.consumableSelection.energy = this.isSelected();
        });
        var checkboxMotivationConsumes = new west.gui.Checkbox();
        checkboxMotivationConsumes.setLabel("Motivation consumables");
        checkboxMotivationConsumes.setSelected(Proscris.consumableSelection.motivation);
        checkboxMotivationConsumes.setCallback(function() {
            Proscris.consumableSelection.motivation = this.isSelected();
        });
        var checkboxHealthConsumes = new west.gui.Checkbox();
        checkboxHealthConsumes.setLabel("Health consumables");
        checkboxHealthConsumes.setSelected(Proscris.consumableSelection.health);
        checkboxHealthConsumes.setCallback(function() {
            Proscris.consumableSelection.health = this.isSelected();
        });
        var buttonFilter = new west.gui.Button("Select",function() {
            Proscris.selectTab("consumables");
        });
        $("#energy_consumables",html).append(checkboxEnergyConsumes.getMainDiv());
        $("#motivation_consumables",html).append(checkboxMotivationConsumes.getMainDiv());
        $("#health_consumables",html).append(checkboxHealthConsumes.getMainDiv());
        $("#button_filter_consumables",html).append(buttonFilter.getMainDiv());
        htmlSkel.append(html);
        return htmlSkel;
    };

    Proscris.addSleepPlacesItems = function(combobox) {
        combobox.addItem(-2,"None");
        if(Proscris.homeTown != null) {
        combobox.addItem(-1,Proscris.homeTown.name);
        }
        for(var i = 0 ; i < Proscris.forts.length;i++) {
            var type = (Proscris.forts[i].type == 0) ? "Small" : (Proscris.forts[i].type == 1)? "Medium" : "Large";
            combobox.addItem(i.toString(),Proscris.forts[i].name + "  -  " + type );
        }
    }

    Proscris.createSettingsGui = function() {
        var htmlSkel = $("<div id=\'settings_overview'\ style = \'padding:10px;'\></div>");
        var checkboxAddEnergy = new west.gui.Checkbox();
        checkboxAddEnergy.setLabel("Add energy");
        checkboxAddEnergy.setSelected(Proscris.settings.addEnergy);
        checkboxAddEnergy.setCallback(function() {
            Proscris.settings.addEnergy = !Proscris.settings.addEnergy;
        });
        var checkboxAddMotivation = new west.gui.Checkbox();
        checkboxAddMotivation.setLabel("Add motivation");
        checkboxAddMotivation.setSelected(Proscris.settings.addMotivation);
        checkboxAddMotivation.setCallback(function() {
            Proscris.settings.addMotivation = !Proscris.settings.addMotivation;
        });
        var checkboxAddHealth = new west.gui.Checkbox();
        checkboxAddHealth.setLabel("Add health");
        checkboxAddHealth.setSelected(Proscris.settings.addHealth);
        checkboxAddHealth.setCallback(function() {
            Proscris.settings.addHealth = !Proscris.settings.addHealth;
        });
        var htmlHealthStop = $("<div></div>");
        htmlHealthStop.append("<span> Stoppage health percent value </span>");
        var healthStopTextfiled = new west.gui.Textfield("healthStop");
        healthStopTextfiled.setValue(Proscris.settings.healthStop);
        healthStopTextfiled.setWidth(100);
        htmlHealthStop.append(healthStopTextfiled.getMainDiv());
        var htmlSetWearDelay = $("<div></div>");
        htmlSetWearDelay.append("<span> Job set equip delay </span>");
        var setWearDelayTextfiled = new west.gui.Textfield("setWearDelay");
        setWearDelayTextfiled.setValue(Proscris.settings.setWearDelay);
        setWearDelayTextfiled.setWidth(100);
        htmlSetWearDelay.append(setWearDelayTextfiled.getMainDiv());

        var htmlJobDelay = $("<div></div>");
        htmlJobDelay.append("<span> Random delay between jobs(seconds)</span>");
        var jobDelayTextFieldMin = new west.gui.Textfield("jobDelay");
        jobDelayTextFieldMin.setValue(Proscris.settings.jobDelayMin);
        jobDelayTextFieldMin.setWidth(50);
        var jobDelayTextFieldMax = new west.gui.Textfield("jobDelay");
        jobDelayTextFieldMax.setValue(Proscris.settings.jobDelayMax);
        jobDelayTextFieldMax.setWidth(50);

        htmlJobDelay.append(jobDelayTextFieldMin.getMainDiv());
        htmlJobDelay.append("<span> - </span>");
        htmlJobDelay.append(jobDelayTextFieldMax.getMainDiv());

        var htmlRegeneration = $("<div></div>");
        var checkboxEnableRegeneration = new west.gui.Checkbox();
        checkboxEnableRegeneration.setLabel("Enable regeneration");
        checkboxEnableRegeneration.setSelected(Proscris.settings.enableRegeneration);
        checkboxEnableRegeneration.setCallback(function() {
            Proscris.settings.enableRegeneration = !Proscris.settings.enableRegeneration;
            if(Proscris.settings.enableRegeneration) {
                $("#regeneration_choices_container").css('visibility','visible');
            }else {
                $("#regeneration_choices_container").css('visibility','hidden');
            }
        });

        var sleepPlacesCombobox = new west.gui.Combobox("sleep_places");
        Proscris.addSleepPlacesItems(sleepPlacesCombobox);
        sleepPlacesCombobox = sleepPlacesCombobox.select(Proscris.selectedSleepPlace);
        sleepPlacesCombobox.addListener(function(value) {
            Proscris.selectedSleepPlace = value;
            Proscris.selectTab("settings");
        });

        var htmlRegenerationChoices = $("<div id='regeneration_choices_container'></div>");
        htmlRegenerationChoices.css({'display':'inline-block','padding-left':'10px','visibility':(Proscris.settings.enableRegeneration)?'visible':"hidden"});
        htmlRegenerationChoices.append($("<span>Sleep place: </span>"));
        htmlRegenerationChoices.append(sleepPlacesCombobox.getMainDiv());

        htmlRegeneration.append(checkboxEnableRegeneration.getMainDiv());
        htmlRegeneration.append(htmlRegenerationChoices);



        var buttonApply = new west.gui.Button("Apply",function() {
            Proscris.settings.addEnergy = checkboxAddEnergy.isSelected();
            Proscris.settings.addMotivation = checkboxAddMotivation.isSelected();
            Proscris.settings.addHealth = checkboxAddHealth.isSelected();
            if(Proscris.isNumber(healthStopTextfiled.getValue())) {
                var healthStop = parseInt(healthStopTextfiled.getValue());
                healthStop = Math.min(30,healthStop);
                Proscris.settings.healthStop = healthStop;
            }
            if(Proscris.isNumber(setWearDelayTextfiled.getValue())) {
                var setWearDelay = parseInt(setWearDelayTextfiled.getValue());
                setWearDelay = Math.min(10,setWearDelay);
                Proscris.settings.setWearDelay = setWearDelay;
            }
            if(Proscris.isNumber(jobDelayTextFieldMin.getValue())) {
                var jobDelayTimeMin = parseInt(jobDelayTextFieldMin.getValue());
                Proscris.settings.jobDelayMin = jobDelayTimeMin;
            }else {
                Proscris.settings.jobDelayMin = 0;
                Proscris.settings.jobDelayMax = 0;
                new UserMessage("Wrong format of delay job min value. Please set a number.", UserMessage.TYPE_ERROR).show();
            }
            if(Proscris.isNumber(jobDelayTextFieldMax.getValue())) {
                var jobDelayTimeMax = parseInt(jobDelayTextFieldMax.getValue());
                Proscris.settings.jobDelayMax = jobDelayTimeMax;
            }else {
                Proscris.settings.jobDelayMin = 0;
                Proscris.settings.jobDelayMax = 0;
                new UserMessage("Wrong format of delay job max value. Please set a number.", UserMessage.TYPE_ERROR).show();
            }
            Proscris.selectTab("settings");
        })

        htmlSkel.append(checkboxAddEnergy.getMainDiv());
        htmlSkel.append("<br>");
        htmlSkel.append(checkboxAddMotivation.getMainDiv());
        htmlSkel.append("<br>");
        htmlSkel.append(checkboxAddHealth.getMainDiv());
        htmlSkel.append("<br>");
        htmlSkel.append(htmlHealthStop);
        htmlSkel.append("<br>");
        htmlSkel.append(htmlSetWearDelay);
        htmlSkel.append("<br>");
        htmlSkel.append(htmlJobDelay);
        htmlSkel.append("<br>");
        htmlSkel.append(htmlRegeneration);
        htmlSkel.append("<br>");
        htmlSkel.append(buttonApply.getMainDiv());
        return htmlSkel;
    };
    Proscris.createStatisticsGui = function() {
        var htmlSkel = $("<div id=\'statistics_overview'\></div>");
        htmlSkel.append($("<span>Job count in this session: " + Proscris.statistics.jobsInSession + "</span><br>"));
        htmlSkel.append($("<span>Xp count in this session: " + Proscris.statistics.xpInSession + "</span><br>"));
        htmlSkel.append($("<span>Job count total: " + Proscris.statistics.totalJobs + "</span><br>"));
        htmlSkel.append($("<span>Xp count total: " + Proscris.statistics.totalXp + "</span><br>"));
        return htmlSkel;
    };
    Proscris.createMenuIcon = function() {
        var menuimage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAeAB4DARIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAABwYIBQkK/8QALRAAAQMDAwMEAgAHAAAAAAAAAgEDBQQGEQcIEgATIQkiMUEUIzNCUWFxgZH/xAAYAQEAAwEAAAAAAAAAAAAAAAAGBAUHAP/EACoRAAEDAwMDAwQDAAAAAAAAAAECAxEABCEFMUESYYFRcfATFHLBsdHh/9oADAMBAAIRAxEAPwA11L1J3K2jclHeujdu07cbHxgMFQo7+UNc4jyk4+437DBeGRw2Rfyr5xjrcErtg0800mGou4oOUqW2UBHHu35b5Efu8Fj5H/nnqcbdly4WpDixscKkSZ4M47VES462ykKQk8ZHAjkfzRjpZrZo5bOiM5e25+Ktmzr5uKKGlh42Yku4DDZkhk+Zo3lpwuIIg4UhRSRVzlOiXU7bzojYeu93T+sWpLj9I80ytuRsxWNgdSFRU1IcKY1yqqyLIEqFkVRS5Y8L0N1K61B1tQeWSltUEJEdpPJ8Clek2Fg9cJSiElQkdWfA4Hk1LaV3HpdqZqFWWbJbg7XqqysrHnounhxqXHXWkRScTLjYCvHCrlFXx9eOkv09tslr3RuSvCqmLfqK2si7bYbh6iucaR0HHAQCJsUT9gJwXJJlMufOV6maFeX1wotMPFCAJOEmM7CRgnP9Gu17SbTT0hx5AUomAJInEzg5AwKn6KMpqdSpXqQi4qvFwvHIfpeni/dvk5aEy5SSK075dwkzSipY/sqY8L1oaXW1J3rP1MrSdqWd6d7Xvtwte873hq6pqpyYoomEj3O4DoxhN/kOm8gmiiJGDyIJKipkFXC8er31cqWvl9is9JfkNsvUc5Fm24LaclIqhGvn/Dq9BtSU+yypxBgmBj0n/aWWIbcdShQmJrp1iW0vTTeY3J37eshIzsjK1FpyVA+BvuMD32zfqidIv1q8wQU/JOKCTxEmMl0ia/2MzpTs1sewXGm6l6ZiSuCUrhcX+PJVRPgCDxTuIA8RVSUccBwi/RJDjl3qKkJJ6Rg/lGT6/qcjOaYfTYsdHS8sDrO2+UTABjH7jBxIrNet+r95M6vxd/aeXdKW7OwLitrXW9IHSGwROCeAJtUURHiIdv4UGg5oSquISUi3o6TkqBh0O3gRH2/HlPr/AH1ZMN/bJhO/z5vVTdXK71QUrbgdj89K9BHp+1Vwb19kVha063RRVdzPM1VFJSWBpjkSpal2nSrIQHhl0W0NeIomVXGE8dcl6RsvVh6cWlNEDpdyht1KV41RPeQOF5T+vhU8r5X76R6Y+85ZIV1E+/vt3jaed6ob5lLdyUlMbHwQDPnev//Z';
        var div = $('<div class="ui_menucontainer" />');
        var link = $('<div id="Menu" class="menulink" onclick=Proscris.loadJobs(); title="Automatizare Proscrisă" />').css('background-image', 'url(' + menuimage + ')');
        $('#ui_menubar').append((div).append(link).append('<div class="menucontainer_bottom" />'));
    };
    $(document).ready(function() {
        try{
            Proscris.loadLanguage();
            Proscris.loadSets(function(){});
            Proscris.getCookies();
            Proscris.createMenuIcon();
        }catch(e) {
            console.log("exception occured");
        }
    });
})();
