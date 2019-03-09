#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Mar  9 02:04:56 2019

@author: cuozzo
"""

Sectors = {
        
        'Industry':{
                'Factory':{
                        'Engineer':{
                                'Construction':{
                                    'Building':{
                                        'Manufacturing':{
                                                'Electronics':{
                                                        'Engineering':{
                                                                'Watches':{
                                                                        'Vehicles':{
                                                                                'Craft':{
                                                                                        'Warehouse':{
                                                                                                'Transport':1}
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },



                                
        'Environment':{
                'Architecture':{
                        'Urban development':{
                                'Energy':{
                                        'Utilitie':{
                                                'Gardening':{
                                                        'Plants':{
                                                                'Tree':{
                                                                        'Mountain':{
                                                                                'Ocean':{
                                                                                        'Water':{
                                                                                                'Earth':{
                                                                                                        'Agriculture':1}
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                }
                                            }
                                        }
                                    }
                                },
        
        'Science':{
                'Chemical':{
                        'Pharma':{
                                'Biotechnology':{
                                        'Life sciences'
                                            'Biology':{
                                                    'Reasearch':{
                                                            'Data':{
                                                                    'Technical':{
                                                                            'Analyse':{
                                                                                    'Bioinformatics':{
                                                                                            'Space':{
                                                                                                    'Astronomy':{
                                                                                                            'Physics':1}
                                                                                                    }
                                                                                                }
                                                                                        }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
        'Economy':{
                'Business':{
                        'Accountancy':{
                                'Banking':{
                                        'Insurance':{
                                                'Finance':{
                                                        'Selling':{
                                                                'Sales':{
                                                                    'Retail':{
                                                                        'Consulting':{
                                                                                'Management':{
                                                                                        'Marketing':{
                                                                                                'Advertising':{
                                                                                                'PR':1}
                                                                                               }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },                  
        'Law':{
            'Legal':{
                    'Juridical':{
                            'Penal':{
                                    'Law enforcement':{
                                            'Security':{
                                                'Surveillance':{
                                                        'Police':{
                                                                'Customs':{
                                                                        'Rescue':{
                                                                                'Military':1}
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                                            
        'Health':{
                'Surgery':{
                        'Nutrition':{
                                'Healthcare':{
                                        'Medicine':{
                                                'Care':{
                                                        'Therapy':{
                                                                'Oncology':1}
                                                        }
                                                    }
                                        }
                                }
                        }
                },
                                
        
        'Social':{
                'Institution':{
                        'Social care':{
                                'Education':{
                                        'Teaching':{
                                                'Pedagogy':{
                                                        'Sport':{
                                                                'Well-being':{
                                                                        'Wellness':{
                                                                                'Psychology':{
                                                                                        'Personnal development':{
                                                                                            'Coaching':{
                                                                                            'Hospitality':{
                                                                                                    'Event management':
1}
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
        'Informatics':{
                'Information':{
                        'Technology':{
                                'Communication':{
                                        'Telecom':{
                                                'Programming':{
                                                        'Modelling':{
                                                            'Software':{
                                                                    'Web':1}
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },

        'Services':{
            'Public':{
                'Leisure':{
                    'Sport':{
                        'Trusts':{
                                'Real Estate':{
                                        'Editing':{
                                            'Editorial':{
                                                'Publishing':{
                                                    'Typography':{
                                                            'Printing':{
                                                                'Travel':{
                                                                        'Catering':{
                                                                                'Food':{
                                                                                        'Customer':{
                                                                                                'Tourism':1}
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
        'Arts':{
                'Creative arts':{
                        'Culture':{
                                'Design':{
                                        'Graphic Art':{
                                                'Photography':{
                                                        'Cinematography':{
                                                                'Writing':1}
                                                        }
                                                    }
                                                }
                                            }
                                                                        
                                    }
                                },


    'Admin':{
            'Administration':{
                    'Recruitement':{
                            'Human Ressources':{
                                    'HR':{
                                            'Consulting':{
                                                    'CEO':{
                                                            'Logistics':{
                                                                    'Purchasing':{
                                                                            'Trading':1}
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }


categories = ["Technical Skills", "Soft skills", "Professional experience","Volunteer","Extra-professionnal experience","Hobbies","Interests"]

Parasites = {'to','an','a','the','by','as','from','for','in','on','it','its','my','of','and','with','about','based','other','between','do','make','may','new','work','best','far','than','want','professional','experience','language','within','high','low','etc','external','level','•',':',';','.',',','good','best','further','since','because','cause'}

#############
# Functions #
#############

def read_file(file):
    S = set()
    with open(file) as f:
        for line in f:
            line = line.rstrip()
            split = line.split()
            for word in split:
                S.add(word.lower().replace('.','').replace('(','').replace(')',''))
    return S

################
# Data Collect #
################

Candidate = read_file('CV.txt')

Questionnary = read_file('CV.txt')
            
Positions = {}
Announcements = [
        'accountant',
        'CERN',
        'Senior Manager',
        'administration apprentice',
        'Commercial lawyer',
        'famaily manager',
        'Medicine',
        'Ticketing',
        'business manager',
        'Corporate Finance Lawyer',
        'Recruitment'
]

for Title in Announcements:
    Positions[Title] = set()
    
for Key in Positions:
    Positions[Key] = read_file(Key)
    
    
######################
# Matching Algorithm #
######################

Scores = {}
for Job in Positions:
    Scores[len(Positions[Job]&Candidate-Parasites)/len(Positions[Job]-Parasites)] = Job
for score in sorted(Scores.keys())[::-1]:
    print('')
    print(Scores[score],'\t',score)
    print(Positions[Scores[score]]&Candidate-Parasites)
    print('')
    
        