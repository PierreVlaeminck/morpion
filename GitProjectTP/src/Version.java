import java.util.HashMap;

public abstract class Version {

    protected HashMap<String, String> dico;
    protected String entete;

    public Version(){
        this.dico = new HashMap<>();
    }

    public void addDico(String enFrancais, String traduction){
        this.dico.put(enFrancais, traduction);
    }

    public String getTraduction(String enFrancais){
        return this.dico.get(enFrancais);
    }
    
}
