window.App = {
   currentFacultyId: '', //Current Logged in Faculty
   currentStaffId: '',
   facultyInformationModel: '',
   minYear: 1900,
   maxYear: 2020,
   currentMode: '',


   /*Api URL's*/

   loginUrl: '../server/php/check.php',

   facultyProfileUrl: '../server/php/FacultyPersonalInfo/getFacInfo.php', //Get Faculty Information
   facultyDegreeEarnedUrl: '../server/php/FacultyAcademicBackground/getFacEarnedDegree.php', //Get Degree Earned
   facultyDegreePursueUrl: '../server/php/FacultyAcademicBackground/getFacDegreePursue.php', //Get Degree Pursue
   facultySpecialTrainingUrl: '../server/php/FacultySpecialTraining/getFacSpecTrain1.php', // Faculty Special Training
   facultyTeachExpUrl: '../server/php/FacultyTeachingExperience/getFacTeachExp.php', // Faculty Teaching Exp
   licenseUrl: '../server/php/FacultyLicensure/getFacProfExp.php', // Faculty Licensure
   nonTeachExpUrl: '../server/php/FacultyNon-Teaching/getFacProfPrac1.php', // Non Teaching Exp 
   facLeaderUrl: '../server/php/FacultyMembership/getFacLeadership.php', // Faculty Leader
   facMemberUrl:'../server/php/FacultyMembership/getFacMembership.php', // Faculty Member
   facAwardsUrl:'../server/php/FacultyAwards/getFacAwards.php', // Faculty Awards
   facInFundedUrl:'../server/php/FacultyResearch/getFacInResearch.php', // Internally Funded Research
   facExFundedUrl:'../server/php/FacultyResearch/getFacExResearch.php', // Externally Funded Research
   facResGrantsUrl:'../server/php/FacultyResearch/getFacResearchGrants.php', // Research Grants
   facJournalUrl:'../server/php/FacultyPublication/getFacJournal.php',   // Journal Publication
   facPrototypeUrl:'../server/php/FacultyPublication/getFacPrototype.php', // Published Prototype
   
   facComSrvDLSUUrl:'../server/php/FacultyCommunityService/getFacComSrvDLSU.php', // Community Service in DLSU
   facPatentsUrl: '../server/php/FacultyPublication/getFacPatents.php', // Patents
   facTextbooksUrl: '../server/php/FacultyPublication/getFacTextBook.php', //Textbooks
   facChaperBookUrl: '../server/php/FacultyPublication/getFacChaptBook.php', //Chapter Books
   facConPapUrl: '../server/php/FacultyPublication/getFacConferencePaper.php', //Conference Paper
   facPubBookUrl: '../server/php/FacultyPublication/getFacOtherPublished.php', //Published Creative
   facScreenPlayUrl: '../server/php/FacultyPublication/getFacScreenPlay.php', // Screen Plays
   facOtherResearchUrl: '../server/php/FacultyPublication/getFacOtherResearch.php', // Other Research
   facConferencesUrl: '../server/php/FacultyPublication/getFacSeminars.php', // Conferences

   facProfOrgUrl: '../server/php/FacultyCommunityService/getFacCSProfOrg.php', //Prof Org
   facGovOrgUrl: '../server/php/FacultyCommunityService/getFacCSGovOrg.php', // Gov Org
   facOtherOrgUrl: '../server/php/FacultyCommunityService/getFacCSOthers.php', //Other Orgs

   //Dropdowns

   degreeDropDownUrl: '../server/php/Admin/degree.php',
   degreeLevelDropDownUrl: '../server/php/Admin/degree_level.php',
   specializationDropDownUrl: '../server/php/Admin/specialization.php',
   institutionDropDownUrl: '../server/php/Admin/institution.php',
   industryDropDownUrl: '../server/php/Admin/industry.php',
   yearDropDownUrl: '../server/php/Admin/year.php',
   orgDropDownUrl: '../server/php/Admin/organization.php',
   educLevelDropDownUrl: '../server/php/Admin/educLevel.php',
   unitDropDownUrl: '../server/php/Admin/unit.php',
   fagencyDropDownUrl: '../server/php/Admin/fundingAgency.php',
   locationDropDownUrl: '../server/php/Admin/location.php',
   degreeStagesDropDownUrl: '../server/php/Admin/degree_stages.php',
   positionDropDownUrl: '../server/php/Admin/position.php',
   journalsDropDownUrl: '../server/php/Admin/journals.php',
   countryDropDownUrl: '../server/php/Admin/country.php',
   deptDropDownUrl: '../server/php/Admin/department.php',
   gov_agencyDropDownUrl: '../server/php/Admin/gov_agency.php',
   rankDropDownUrl: '../server/php/Admin/rank.php',
   acctTypeDropDownUrl: '../server/php/Admin/acctType.php',
   positionDropDownUrl: '../server/php/Admin/position.php',
   classificationDropDownUrl: '../server/php/Admin/classification.php',
   journalpubDropDownUrl:'../server/php/Admin/journalpublication.php',
   currencyDropDownUrl: '../server/php/Admin/currency.php',
   journalTypeDropDownUrl: '../server/php/Admin/journalType.php',
   coAuthorDropDownUrl: '../server/php/Admin/coAuthor.php',
   statusDropDownUrl: '../server/php/Admin/status.php',
   
   //Faculty Add Remove Fetch Edit
   degreeEarnedAddUrl: '../server/php/FacultyAcademicBackground/insertEarnedDegree.php',
   degreeEarnedRemoveUrl: '../server/php/FacultyAcademicBackground/removeEarnedDegree.php',
   degreeEarnedFetchUrl: '../server/php/FacultyAcademicBackground/fetchEarnedDegree.php',
   degreeEarnedEditUrl: '../server/php/FacultyAcademicBackground/updateEarnedDegree.php',
   degreePursueAddUrl: '../server/php/FacultyAcademicBackground/insertDegreePursue.php',
   degreePursueRemoveUrl: '../server/php/FacultyAcademicBackground/removeDegreePursue.php',
   degreePursueFetchUrl: '../server/php/FacultyAcademicBackground/fetchDegreePursue.php',
   degreePursueEditUrl: '../server/php/FacultyAcademicBackground/updateDegreePursue.php',
   facultyListUrl: '../server/php/Admin/faculty.php',
   specTrainingAddUrl: '../server/php/FacultySpecialTraining/insertSpecTraining.php',
   specTrainingRemoveUrl: '../server/php/FacultySpecialTraining/removeSpecTraining.php',
   specTrainingFetchUrl: '../server/php/FacultySpecialTraining/fetchSpecTraining.php',
   specTrainingEditUrl: '../server/php/FacultySpecialTraining/updateSpecTraining.php',
   teachExpAddUrl: '../server/php/FacultyTeachingExperience/insertTeachExp.php',
   teachExpRemoveUrl: '../server/php/FacultyTeachingExperience/removeTeachExp.php',
   teachExpFetchUrl: '../server/php/FacultyTeachingExperience/fetchTeachExp.php',
   teachExpEditUrl: '../server/php/FacultyTeachingExperience/updateTeachExp.php',
   licenseAddUrl: '../server/php/FacultyLicensure/insertLicensure.php',
   licenseRemoveUrl: '../server/php/FacultyLicensure/removeLicensure.php',
   licenseFetchUrl: '../server/php/FacultyLicensure/fetchLicensure.php',
   licenseEditUrl: '../server/php/FacultyLicensure/updateLicensure.php',
   nonTeachExpAddUrl: '../server/php/FacultyNon-Teaching/insertNonTeachExp.php',
   nonTeachExpRemoveUrl: '../server/php/FacultyNon-Teaching/removeNonTeachExp.php',
   nonTeachExpFetchUrl: '../server/php/FacultyNon-Teaching/fetchNonTeachExp.php',
   nonTeachExpEditUrl: '../server/php/FacultyNon-Teaching/updateNonTeachExp.php',
   leadershipAddUrl: '../server/php/FacultyMembership/insertLeadership.php',
   leadershipRemoveUrl: '../server/php/FacultyMembership/removeLeadership.php',
   leadershipFetchUrl: '../server/php/FacultyMembership/fetchLeadership.php',
   leadershipEditUrl: '../server/php/FacultyMembership/updateLeadership.php',
   membershipAddUrl: '../server/php/FacultyMembership/insertMembership.php',
   membershipRemoveUrl: '../server/php/FacultyMembership/removeMembership.php',
   membershipFetchUrl: '../server/php/FacultyMembership/fetchMembership.php',
   membershipEditUrl: '../server/php/FacultyMembership/updateMembership.php',
   awardsAddUrl: '../server/php/FacultyAwards/insertAward.php',
   awardsRemoveUrl: '../server/php/FacultyAwards/removeAward.php',
   awardsFetchUrl: '../server/php/FacultyAwards/fetchAwards.php',
   awardsEditUrl: '../server/php/FacultyAwards/updateAward.php',
   inResFundedAddUrl: '../server/php/FacultyResearch/insertInResearch.php',
   inResFundedRemoveUrl: '../server/php/FacultyResearch/removeInResearch.php',
   inResFundedFetchUrl: '../server/php/FacultyResearch/fetchInResearch.php',
   inResFundedEditUrl: '../server/php/FacultyResearch/updateInResearch.php',
   exResFundedAddUrl: '../server/php/FacultyResearch/insertExResearch.php',
   exResFundedRemoveUrl: '../server/php/FacultyResearch/removeExResearch.php',
   exResFundedFetchUrl: '../server/php/FacultyResearch/fetchExResearch.php',
   exResFundedEditUrl: '../server/php/FacultyResearch/updateExResearch.php',
   resGrantModelAddUrl: '../server/php/FacultyResearch/insertGrants.php',
   resGrantModelRemoveUrl: '../server/php/FacultyResearch/removeGrants.php',
   resGrantModelFetchUrl: '../server/php/FacultyResearch/fetchGrants.php',
   resGrantModelEditUrl: '../server/php/FacultyResearch/updateGrants.php',
   journalPubModelAddUrl: '../server/php/FacultyPublication/insertJournal.php',
   journalPubModelRemoveUrl: '../server/php/FacultyPublication/removeJournal.php',
   journalPubModelFetchUrl: '../server/php/FacultyPublication/fetchJournal.php',
   journalPubModelEditUrl: '../server/php/FacultyPublication/updateJournal.php',
   pubPrototypeModelAddUrl: '../server/php/FacultyPublication/insertPrototype.php',
   pubPrototypeModelRemoveUrl: '../server/php/FacultyPublication/removePrototype.php',
   pubPrototypeModelFetchUrl: '../server/php/FacultyPublication/fetchPrototype.php',
   pubPrototypeModelEditUrl: '../server/php/FacultyPublication/updatePrototype.php',
   patentModelAddUrl: '../server/php/FacultyPublication/insertPatents.php',
   patentModelRemoveUrl: '../server/php/FacultyPublication/removePatents.php',
   patentModelFetchUrl: '../server/php/FacultyPublication/fetchPatents.php',
   patentModelEditUrl: '../server/php/FacultyPublication/updatePatents.php',
   textBookModelAddUrl: '../server/php/FacultyPublication/insertTextBook.php',
   textBookModelRemoveUrl: '../server/php/FacultyPublication/removeTextBook.php',
   textBookModelFetchUrl: '../server/php/FacultyPublication/fetchTextBook.php',
   textBookModelEditUrl: '../server/php/FacultyPublication/updateTextBook.php',
   chapTextbookModelAddUrl: '../server/php/FacultyPublication/insertChapterEdit.php',
   chapTextbookModelRemoveUrl: '../server/php/FacultyPublication/removeChapterEdit.php',
   chapTextbookModelFetchUrl: '../server/php/FacultyPublication/fetchChapterEdit.php',
   chapTextbookModelEditUrl: '../server/php/FacultyPublication/updateChaptEdit.php',
   confPaperModelAddUrl: '../server/php/FacultyPublication/insertConfPaper.php',
   confPaperModelRemoveUrl: '../server/php/FacultyPublication/removeConfPaper.php',
   confPaperModelFetchUrl: '../server/php/FacultyPublication/fetchConfPaper.php',
   confPaperModelEditUrl: '../server/php/FacultyPublication/updateConfPaper.php',
   creativeWorksModelAppUrl: '../server/php/FacultyPublication/insertOtherPub.php',
   creativeWorksModelRemoveUrl: '../server/php/FacultyPublication/removeOtherPub.php',
   creativeWorksModelFetchUrl: '../server/php/FacultyPublication/fetchOtherPub.php',
   creativeWorksModelEditUrl: '../server/php/FacultyPublication/updateOtherPub.php',
   screenPlayWorksModelAddUrl: '../server/php/FacultyPublication/insertScreenPlay.php',
   screenPlayWorksModelRemoveUrl: '../server/php/FacultyPublication/removeScreenPlay.php',
   screenPlayWorksModelFetchUrl: '../server/php/FacultyPublication/fetchScreenPlay.php',
   screenPlayWorksModelEditUrl: '../server/php/FacultyPublication/updateScreenPlay.php',
   otherResearchModelAddUrl: '../server/php/FacultyPublication/insertOtherResearch.php',
   otherResearchModelRemoveUrl: '../server/php/FacultyPublication/removeOtherResearch.php',
   otherResearchModelFetchUrl: '../server/php/FacultyPublication/fetchOtherResearch.php',
   otherResearchModelEditUrl: '../server/php/FacultyPublication/updateOtherResearch.php',
   conferenceModelAddUrl: '../server/php/FacultyPublication/insertSeminars.php',
   conferenceModelRemoveUrl: '../server/php/FacultyPublication/removeSeminars.php',
   conferenceModelFetchUrl: '../server/php/FacultyPublication/fetchSeminars.php',
   conferenceModelEditUrl: '../server/php/FacultyPublication/updateSeminars.php',
   comSrvDLSUAddUrl: '../server/php/FacultyCommunityService/insertComSrvDLSU.php',
   comSrvDLSURemoveUrl: '../server/php/FacultyCommunityService/removeComSrvDLSU.php',
   comSrvDLSUFetchUrl: '../server/php/FacultyCommunityService/fetchComSrvDLSU.php',
   comSrvDLSUEditUrl: '../server/php/FacultyCommunityService/updateComSrvDLSU.php',
   profOrgModelAddUrl: '../server/php/FacultyCommunityService/insertProfOrg.php',
   profOrgModelRemoveUrl: '../server/php/FacultyCommunityService/removeProfOrg.php',
   profOrgModelFetchUrl: '../server/php/FacultyCommunityService/fetchProfOrg.php',
   profOrgModelEditUrl: '../server/php/FacultyCommunityService/updateProfOrg.php',
   govOrgModelAddUrl: '../server/php/FacultyCommunityService/insertGovOrg.php',
   govOrgModelRemoveUrl: '../server/php/FacultyCommunityService/removeGovOrg.php',
   govOrgModelFetchUrl: '../server/php/FacultyCommunityService/fetchGovOrg.php',
   govOrgModelEditUrl: '../server/php/FacultyCommunityService/updateGovOrg.php',
   otherOrgModelAddUrl: '../server/php/FacultyCommunityService/insertCSOthers.php',
   otherOrgModelRemoveUrl: '../server/php/FacultyCommunityService/removeCSOthers.php',
   otherOrgModelFetchUrl: '../server/php/FacultyCommunityService/fetchCSOthers.php',
   otherOrgModelEditUrl: '../server/php/FacultyCommunityService/updateCSOthers.php',
   
   //Update Profile and Update Password
   facProfileFetchUrl: '../server/php/FacultyPersonalInfo/fetchFacInfo.php',
   facProfileEditcUrl: '../server/php/FacultyPersonalInfo/updateFacInfo.php',
   facultyPasswordUrl: '../server/php/FacultyPersonalInfo/getFacPassword.php',
   facPasswordFetchUrl: '../server/php/FacultyPersonalInfo/fetchFacPassword.php',
   facPasswordEditUrl: '../server/php/FacultyPersonalInfo/updateFacPassword.php',
   
   //Administrator URL
   userRecordsUrl: '../server/php/Admin/userRecords.php',
   adminAddNewUserUrl: '../server/php/Admin/AddNewRecord/addNewUser.php',
   adminRemoveUserUrl: '../server/php/Admin/RemoveRecord/removeUser.php',
   adminFetchUserUrl: '../server/php/Admin/FetchRecord/fetchUser.php',
   adminUpdateUserUrl: '../server/php/Admin/UpdateRecord/updateUser.php',
   adminAddNewRankUrl: '../server/php/Admin/AddNewRecord/addNewRank.php',
   adminRemoveRankUrl: '../server/php/Admin/RemoveRecord/removeRank.php',
   adminFetchRankUrl: '../server/php/Admin/FetchRecord/fetchRank.php',
   adminUpdateRankUrl: '../server/php/Admin/UpdateRecord/updateRank.php',
   adminAddNewDeptUrl: '../server/php/Admin/AddNewRecord/addNewDept.php',
   adminRemoveDeptUrl: '../server/php/Admin/RemoveRecord/removeDept.php',
   adminFetchDeptUrl: '../server/php/Admin/FetchRecord/fetchDept.php',
   adminUpdateDeptUrl: '../server/php/Admin/UpdateRecord/updateDept.php',
   adminAddNewUnitUrl: '../server/php/Admin/AddNewRecord/addNewUnit.php',
   adminRemoveUnitUrl: '../server/php/Admin/RemoveRecord/removeUnit.php',
   adminFetchUnitUrl: '../server/php/Admin/FetchRecord/fetchUnit.php', 
   adminUpdateUnitUrl: '../server/php/Admin/UpdateRecord/updateUnit.php',   
   adminAddNewPositionUrl: '../server/php/Admin/AddNewRecord/addNewPosition.php',
   adminRemovePositionUrl: '../server/php/Admin/RemoveRecord/removePosition.php',
   adminFetchPositionUrl: '../server/php/Admin/FetchRecord/fetchPosition.php',
   adminUpdatePositionUrl: '../server/php/Admin/UpdateRecord/updatePosition.php',
   adminAddNewAcctTypeUrl: '../server/php/Admin/AddNewRecord/addNewAcctType.php',
   adminRemoveAcctTypeUrl: '../server/php/Admin/RemoveRecord/removeAcctType.php',
   adminFetchAcctTypeUrl: '../server/php/Admin/FetchRecord/fetchAcctType.php',
   adminUpdateAcctTypeUrl: '../server/php/Admin/UpdateRecord/updateAcctType.php',
   adminAddNewDegreeUrl: '../server/php/Admin/AddNewRecord/addNewDegree.php', 
   adminRemoveDegreeUrl: '../server/php/Admin/RemoveRecord/removeDegree.php',
   adminFetchDegreeUrl: '../server/php/Admin/FetchRecord/fetchDegree.php',
   adminUpdateDegreeUrl: '../server/php/Admin/UpdateRecord/updateDegree.php',
   adminAddNewDegreeLevelUrl: '../server/php/Admin/AddNewRecord/addNewDegreeLevel.php',
   adminRemoveDegreeLevelUrl: '../server/php/Admin/RemoveRecord/removeDegreeLevel.php',
   adminFetchDegreeLevelUrl: '../server/php/Admin/FetchRecord/fetchDegreeLevel.php',
   adminUpdateDegreeLevelUrl: '../server/php/Admin/UpdateRecord/updateDegreeLevel.php',
   adminAddNewInstitutionUrl: '../server/php/Admin/AddNewRecord/addNewInstitution.php',
   adminRemoveInstitutionUrl: '../server/php/Admin/RemoveRecord/removeInstitution.php',
   adminFetchInstitutionUrl: '../server/php/Admin/FetchRecord/fetchInstitution.php',
   adminUpdateInstitutionUrl: '../server/php/Admin/UpdateRecord/updateInstitution.php',
   adminAddNewIndustryUrl: '../server/php/Admin/AddNewRecord/addNewIndustry.php',
   adminRemoveIndustryUrl: '../server/php/Admin/RemoveRecord/removeIndustry.php',
   adminFetchIndustryUrl: '../server/php/Admin/FetchRecord/fetchIndustry.php',
   adminUpdateIndustryUrl: '../server/php/Admin/UpdateRecord/updateIndustry.php',
   adminAddNewOrganizationUrl: '../server/php/Admin/AddNewRecord/addNewOrganization.php',
   adminRemoveOrganizationUrl: '../server/php/Admin/RemoveRecord/removeOrganization.php',
   adminFetchOrganizationUrl: '../server/php/Admin/FetchRecord/fetchOrganization.php',
   adminUpdateOrganizationUrl: '../server/php/Admin/UpdateRecord/updateOrganization.php',
   adminAddNewLocationUrl: '../server/php/Admin/AddNewRecord/addNewLocation.php',
   adminRemoveLocationUrl: '../server/php/Admin/RemoveRecord/removeLocation.php',
   adminFetchLocationUrl: '../server/php/Admin/FetchRecord/fetchLocation.php',
   adminUpdateLocationUrl: '../server/php/Admin/UpdateRecord/updateLocation.php',
   adminAddNewCountryUrl: '../server/php/Admin/AddNewRecord/addNewCountry.php',
   adminRemoveCountryUrl: '../server/php/Admin/RemoveRecord/removeCountry.php',
   adminFetchCountryUrl: '../server/php/Admin/FetchRecord/fetchCountry.php',
   adminUpdateCountryUrl: '../server/php/Admin/UpdateRecord/updateCountry.php',
   adminAddNewJournalUrl: '../server/php/Admin/AddNewRecord/addNewJournal.php',
   adminRemoveJournalUrl: '../server/php/Admin/RemoveRecord/removeJournal.php',
   adminFetchJournalUrl: '../server/php/Admin/FetchRecord/fetchJournal.php',
   adminUpdateJournalUrl: '../server/php/Admin/UpdateRecord/updateJournal.php',
   adminAddNewJournalPubUrl: '../server/php/Admin/AddNewRecord/addNewJournalPub.php',
   adminRemoveJournalPubUrl: '../server/php/Admin/RemoveRecord/removeJournalPub.php',
   adminFetchJournalPubUrl: '../server/php/Admin/FetchRecord/fetchJournalPub.php',
   adminUpdateJournalPubUrl: '../server/php/Admin/UpdateRecord/updateJournalPub.php',
   adminAddNewCurrencyUrl: '../server/php/Admin/AddNewRecord/addNewCurrency.php',
   adminRemoveCurrencyUrl: '../server/php/Admin/RemoveRecord/removeCurrency.php',
   adminFetchCurrencyUrl: '../server/php/Admin/FetchRecord/fetchCurrency.php',
   adminUpdateCurrencyUrl: '../server/php/Admin/UpdateRecord/updateCurrency.php',
 
 };
