public class Anglais extends Version {

    public Anglais(){
        super();
        this.entete = "En anglais : ";
    }
    
    public String getTraduction(String enFrancais){
        return this.entete + this.dico.get(enFrancais);
    }
}
